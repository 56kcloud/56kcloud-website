import {assign, mergeNestedObject} from '../toolbox'
import axios, {AxiosRequestConfig} from 'axios'

type baseRequest = {
  url: string
  apiKey: string
  options?: AxiosRequestConfig<any>
}

type payloadRequest = baseRequest & {
  payload?: unknown
}

type createAxiosConfigProps = {
  apiKey: string
  options?: AxiosRequestConfig<any>
}

function createFetchConfig({apiKey, options}: createAxiosConfigProps): AxiosRequestConfig<any> {
  let config = {}
  apiKey && assign(config, ['headers', 'Authorization'] , `Bearer ${apiKey}`)
  options && (config = mergeNestedObject(config, options))
  return config
}

export async function get({url, apiKey, options}: baseRequest) {
  return await axios.get(url, createFetchConfig({apiKey, options}))
}

export async function remove({url, apiKey, options}: baseRequest) {
  return await axios.delete(url, createFetchConfig({apiKey, options}))
}

export async function post({url, apiKey, options, payload = {}}: payloadRequest) {
  return await axios.post(url, payload, createFetchConfig({apiKey, options}))
}

export async function put({url, apiKey, options, payload}: payloadRequest) {
  return await axios.put(url, payload, createFetchConfig({apiKey, options}))
}

export async function APIHandler<T>(fn: () => Promise<T>) {
  try {
    return await fn()
  } catch (error) {
    return Promise.reject(error)
  }
}
