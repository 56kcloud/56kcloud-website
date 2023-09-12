import {mergeNestedObject} from '@/utils/toolbox'

export type CallProps = {
  path: string
  options?: any
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export class Fetcher {
  baseUrl: URL
  headers: HeadersInit

  constructor(baseUrl: string, headers: HeadersInit) {
    this.baseUrl = new URL(baseUrl)
    this.headers = headers
  }

  async call(props: CallProps) {
    try {
      const res = await fetch((new URL(props.path, this.baseUrl)).href, {
        method: props.method,
        headers: props.options?.headers ? mergeNestedObject(this.headers, props.options?.headers) : this.headers,
        next: {tags: ['strapi']}
      })
      return res.json()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
