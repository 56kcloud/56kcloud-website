import {HsformsPayload} from '../models/contact-us-form-data.model'
import {hubspotFetcher} from '../../configs/client'

export const getInTouch = async (data: HsformsPayload) => {
  return await hubspotFetcher.call({
    path: '/submissions/v3/integration/submit/7685644/4f7cf5bc-cfed-439b-b82b-8a04a7af510b',
    options: {
      method: 'POST',
      body: JSON.stringify(data)
    }
  })
}

export const subscribeToNewsletter = async (data: HsformsPayload) => {
  return await hubspotFetcher.call({
    path: '/submissions/v3/integration/submit/7685644/eee26d88-2c7e-47b6-bc65-77a5cc3910f1',
    options: {
      method: 'POST',
      body: JSON.stringify(data)
    }
  })
}
