import {deepFind} from '../../toolbox'
import {getPlaiceholder} from 'plaiceholder'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getPropsFromNestedObjects(schema: Record<string, any>, object: Record<string, any>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const temp: Record<string, any> = {}
  const schemaDeepCopy = {...schema}
  const keys = Object.keys(schemaDeepCopy).map((key) => {
    const split = key.split('->')
    if (split.length > 1) {
      schemaDeepCopy[split[0]] = schemaDeepCopy[key]
      delete schemaDeepCopy[key]
    }
    return split
  })
  for (const keyIndex in keys) {
    const [oldKey, newKey] = keys[keyIndex]
    const key = newKey || oldKey
    if (typeof (schemaDeepCopy[oldKey]) !== 'object') {
      const options = schemaDeepCopy[oldKey].split('||')
      for (const optionIndex in options) {
        const path = options[optionIndex].split('.')
        const pathFirstKey = path[0]
        path.shift()
        const value = deepFind(object, options[optionIndex].trim()) 
        || deepFind(object, `${pathFirstKey}.data.attributes.${path.join('.')}`)
        || path.splice(path.length - 1, 1, oldKey) && deepFind(object, `${pathFirstKey}.${path.join('.')}`)
        if (oldKey === 'blurDataURL' && value) {
          try {
            const res = await fetch(value, {method: 'GET'})
            const buffer = Buffer.from(await res.arrayBuffer())
            const {base64} = await getPlaiceholder(buffer)
            temp[key] = base64
          } catch (error) {
            temp[key] = null
          }
          break
        } else {
          temp[key] = value || null
          break
        }
      }
    } else if (Array.isArray(schemaDeepCopy[oldKey])) {
      const array = object[oldKey]?.data || object[oldKey]
      temp[key] = []
      for (const itemIndex in array) {
        const item = array[itemIndex]
        temp[key].push(await getPropsFromNestedObjects(schemaDeepCopy[oldKey][0], item.attributes || item))
      }
    } else {
      temp[key] = {}
      temp[key] = await getPropsFromNestedObjects(schemaDeepCopy[oldKey], object)
    }
  }
  return temp
}
