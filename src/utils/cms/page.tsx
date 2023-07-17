import {deepFind} from '../toolbox'
import {getPlaiceholder} from 'plaiceholder'

export async function getPropsFromNestedObjects(schema, object) {
  const temp = {}
  const keys = Object.keys(schema)
  for (const keyIndex in keys) {
    const key = keys[keyIndex]
    if (typeof (schema[key]) !== 'object') {
      const path = schema[key].split('.')
      const pathFirstKey = path[0]
      path.shift()
      const value = deepFind(object, schema[key]) 
      || deepFind(object, `${pathFirstKey}.data.attributes.${path.join('.')}`)
      || path.splice(path.length - 1, 1, key) && deepFind(object, `${pathFirstKey}.${path.join('.')}`)
      if (key === 'blurDataURL') {
        const res = await fetch(value, {method: 'GET'})
        const buffer = Buffer.from(await res.arrayBuffer())
        const {base64} = await getPlaiceholder(buffer)
        temp[key] = base64
      } else if (value) {
        temp[key] = value
      }
    } else if (Array.isArray(schema[key])) {
      let array = object[key].data || object[key]
      temp[key] = []
      for (const itemIndex in array) {
        const item = array[itemIndex]
        temp[key].push(await getPropsFromNestedObjects(schema[key][0], item.attributes || item))
      }
    } else {
      temp[key] = await getPropsFromNestedObjects(schema[key], object)
    }
  }
  return temp
}
