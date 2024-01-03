import {mergeNestedObject} from '../utils/toolbox'

export type CallProps = {
  path: string
  options?: RequestInit
  apiKey?: string
}

export const baseOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET'
}

export class Fetcher {
  baseUrl: URL
  options: RequestInit

  constructor(baseUrl: string, options?: RequestInit | undefined) {
    this.baseUrl = new URL(baseUrl)
    this.options = mergeNestedObject(baseOptions, options || {})
  }

  async call(props: CallProps) {
    try {
      if (props.options?.body && typeof props.options.body !== 'string') {
        props.options.body = JSON.stringify(props.options?.body)
      }
      const baseOptions = {...this.options}
      const options = props.options ? mergeNestedObject(baseOptions, props.options) : baseOptions
      const res = await fetch(this.cleanUrl(new URL(props.path, this.baseUrl).href), options)
      if (res.status >= 200 && res.status < 300) {
        try {
          return await res.json()
        } catch (error) {
          return {}
        }
      } else {
        let detail = res.statusText
        try {
          detail = JSON.stringify((await res.json())?.detail)
        } catch (error) {
          /* empty */
        }
        throw Error(`${res.status} ${detail}`)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  cleanUrl(url: string) {
    return url.replaceAll(' ', '').trim()
  }
}
