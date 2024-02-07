export type contactUsFormData = {
  firstName: string
  lastName: string
  email: string
  message: string
  legalConsent?: boolean
}

export type HsformsPayloadItem = {
  name: string
  value: string | boolean | number
}

export type HsformsPayloadlegalConsentOptions = {
  consent: HsformsPayloadlegalConsentOptionsContent
}

export type HsformsPayloadlegalConsentOptionsContentCommunication = {
  value: boolean
  subscriptionTypeId: number
  text: string
}

export type HsformsPayloadlegalConsentOptionsContent = {
  consentToProcess: boolean
  text: string
  communications: Array<HsformsPayloadlegalConsentOptionsContentCommunication>
}

export type HsformsPayload = {
  fields: Array<HsformsPayloadItem>
  legalConsentOptions?: HsformsPayloadlegalConsentOptions
}
