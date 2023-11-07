import {HsformsPayload} from '../models/contact-us-form-data.model'
import {hubspotFetcher} from '../../configs/client'

export const sendEmail = async(data: HsformsPayload) => {
  return await hubspotFetcher.call({
    path: '/submissions/v3/integration/submit/7685644/4f7cf5bc-cfed-439b-b82b-8a04a7af510b',
    options: {
      method: 'POST',
      body: JSON.stringify(data)
    }
  })
}
