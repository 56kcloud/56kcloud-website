import {api} from '../config'

export const sendEmail = async (name: string, email: string, text: string) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: [
          {name: 'lastname', value: name},
          {name: 'email', value: email},
          {name: 'message', value: text}
        ]
      })
    })
    if (!response.ok) {
      throw await response?.json()
    }
    return response?.json()
  } catch (err: any) {
    throw new Error(err.message)
  }
}
