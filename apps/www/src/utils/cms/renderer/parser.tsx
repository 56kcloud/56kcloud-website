/* eslint-disable @typescript-eslint/no-explicit-any */
import {deepFind} from '../../toolbox'
import {hostname} from '../../../../configs/server'

type Schema = Record<string, any>;
type ObjectType = Record<string, any>;
type Props = Record<string, any>;

type Keys = {
  oldKey: string,
  newKey: string,
  value: any
};

export async function getComponentProps(schema: Schema, object: ObjectType): Promise<Props> {
  const props: Props = {}
  const schemaDeepCopy = {...schema}

  const keys: Keys[] = Object.entries(schemaDeepCopy).map(([key, value]) => {
    const split = key.split('->')
    const newKeyName = split.length > 1 ? split[1] : key

    schemaDeepCopy[newKeyName] = split.length > 1 ? value : schemaDeepCopy[key]
    if (split.length > 1) delete schemaDeepCopy[key]

    return {oldKey: split[0], newKey: newKeyName, value: schemaDeepCopy[newKeyName]}
  })

  for (const entry of keys) {
    const {oldKey, newKey, value} = entry
    if (typeof value !== 'object') {
      await processNonObject(object, props, oldKey, newKey, value)
    }
    else if (Array.isArray(value)) {
      await processArray(schemaDeepCopy, object, props, oldKey, newKey)
    }
    else {
      props[newKey] = await getComponentProps(value, object)
    }
  }
  return props
}

async function processNonObject(
  object: ObjectType, props: Props, oldKey: string, key: string, value: any
): Promise<void> {
  const options = value.split('||')
  for (const option of options) {
    const path = option.split('.')
    const pathFirstKey = path.shift()
    const foundValue = deepFind(object, option.trim())
      || deepFind(object, `${pathFirstKey}.data.attributes.${path.join('.')}`)
      || path.splice(path.length - 1, 1, oldKey) && deepFind(object, `${pathFirstKey}.${path.join('.')}`)
    if (oldKey === 'blurDataURL' && foundValue) {
      try {
        const res = await fetch(`${hostname}/_next/image?url=${foundValue}&w=16&q=75`, {method: 'GET'})
        const base64 = Buffer.from((await res.arrayBuffer())).toString('base64')
        props[key] = base64
      } catch (error) {
        props[key] = null
      }
      break
    } else {
      props[key] = foundValue || null
      break
    }
  }
}

async function processArray(
  schema: Schema, object: ObjectType, props: Props, oldKey: string, newKey: string
): Promise<void> {
  const array = object[oldKey]?.data || object[oldKey]
  props[newKey] = []
  for (const item of array) {
    props[newKey].push(await getComponentProps(schema[newKey][0], item.attributes || item))
  }
}
