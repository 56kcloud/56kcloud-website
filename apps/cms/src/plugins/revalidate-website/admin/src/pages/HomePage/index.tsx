/*
 *
 * HomePage
 *
 */

import {Alert} from '@strapi/design-system/Alert'
import {Button} from '@strapi/design-system/Button'
import {ContentLayout, HeaderLayout} from '@strapi/design-system/Layout'
import {Loader} from '@strapi/design-system/Loader'
import {Main} from '@strapi/design-system/Main'
import {Portal} from '@strapi/design-system/Portal'
import {Typography} from '@strapi/design-system/Typography'
import {request} from '@strapi/helper-plugin'
import {useFetchClient} from '@strapi/helper-plugin'
import React, {useEffect} from 'react'
import pluginName from '../../utils/plugin-name'

type config = {
  revalidateEndpoint: string
  revalidateToken?: string
}

type AlertProps = {
  title: string
  variant: 'success' | 'error'
}

const HIDE_ALERT_TIMEOUT = 5000

const HomePage = () => {
  const fetchClient = useFetchClient()
  const [config, setConfig] = React.useState<config>()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)
  const [alertProps, setAlertProps] = React.useState<AlertProps | undefined>()

  React.useEffect(() => {
    fetchClient.get(`/${pluginName}/config`).then(({data}: {data: {config: config}}) => {
      setConfig(data.config)
    })
  }, [])

  async function revalidate() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '')
    if (config?.revalidateEndpoint) {
      setIsSubmitting(true)
      try {
        await request(`${config.revalidateEndpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: config.revalidateToken || ''
          },
          body: {
            username: `${userInfo.firstname} ${userInfo.lastname}`
          }
        })
        setAlertProps({
          title: 'Website Revalidated Successfully',
          variant: 'success'
        })
      } catch (e) {
        setAlertProps({
          title: 'Website Revalidation Failed',
          variant: 'error'
        })
      }
      setIsSubmitting(false)
      setShowAlert(true)
    }
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, HIDE_ALERT_TIMEOUT)
    }
  }, [showAlert])

  return (
    <Main>
      <HeaderLayout title='Revalidate Website' subtitle='Rebuild your website with new content' />
      <ContentLayout>
        {showAlert && (
          <Portal
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px'
            }}
          >
            <Alert {...alertProps} onClose={() => setShowAlert(false)} />
          </Portal>
        )}
        {isSubmitting && config?.revalidateEndpoint ? (
          <>
            <Loader>Revalidating...</Loader>
            <Typography variant='omega'>The site is currently rebuilding, please wait.</Typography>
          </>
        ) : (
          <Button onClick={revalidate}>Revalidate Website</Button>
        )}
      </ContentLayout>
    </Main>
  )
}

export default HomePage
