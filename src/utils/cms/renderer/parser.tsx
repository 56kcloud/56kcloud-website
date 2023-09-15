import {deepFind} from '../../toolbox'
import {getPlaiceholder} from 'plaiceholder'

export async function getPropsFromNestedObjects(schema: Record<string, any>, object: Record<string, any>) {
  const temp: Record<string, any> = {}
  const keys = Object.keys(schema)
  for (const keyIndex in keys) {
    const key = keys[keyIndex]
    if (typeof (schema[key]) !== 'object') {
      const options = schema[key].split('||')
      for (const optionIndex in options) {
        const path = options[optionIndex].split('.')
        const pathFirstKey = path[0]
        path.shift()
        const value = deepFind(object, options[optionIndex].trim()) 
        || deepFind(object, `${pathFirstKey}.data.attributes.${path.join('.')}`)
        || path.splice(path.length - 1, 1, key) && deepFind(object, `${pathFirstKey}.${path.join('.')}`)
        if (key === 'blurDataURL' && value) {
          try {
            console.log(value)
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
    } else if (Array.isArray(schema[key])) {
      let array = object[key]?.data || object[key]
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
