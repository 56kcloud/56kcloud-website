import {HsformsPayload} from '../models/contact-us-form-data.model'
import {api} from '../../config'

export const sendEmail = async(data: HsformsPayload) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw await response?.json()
    }
    return response?.json()
  } catch (err: any) {
    throw new Error(err.message)
  }
}
