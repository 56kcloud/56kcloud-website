/*
 *
 * HomePage
 *
 */

import {Button} from '@strapi/design-system/Button'
import {ContentLayout, HeaderLayout} from '@strapi/design-system/Layout'
import {Loader} from '@strapi/design-system/Loader'
import {Main} from '@strapi/design-system/Main'
import {Typography} from '@strapi/design-system/Typography'
import {request} from '@strapi/helper-plugin'
import {useFetchClient} from '@strapi/helper-plugin'
import React from 'react'
import pluginName from '../../utils/plugin-name'

const POLL_INTERVAL = 10000

type config = {
  websiteUrl: string
}

const HomePage = () => {
  const fetchClient = useFetchClient()
  const [config, setConfig] = React.useState<config>()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect(() => {
    fetchClient.get(`/${pluginName}/config`).then(({data}: {data: {config: config}}) => {
      setConfig(data.config)
    })
  }, [])

  function revalidate() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '')
    if (config?.websiteUrl) {
      setIsSubmitting(true)
      request(`${config.websiteUrl}/api/revalidate`, {
        method: 'POST',
        body: {
          username: `${userInfo.firstname} ${userInfo.lastname}`
        }
      })
      setTimeout(() => {
        setIsSubmitting(false)
      }, POLL_INTERVAL)
    }
  }

  return (
    <Main>
      <HeaderLayout
        title='Revalidate Website'
        subtitle='Rebuild your website with new content'
      />
      <ContentLayout>
        {(isSubmitting && config?.websiteUrl) ? (
          <>
            <Loader>Revalidating...</Loader>
            <Typography variant="omega">
              The site is currently rebuilding, please wait.
            </Typography>
          </>
        ) : (
          <Button onClick={revalidate}>
            Revalidate Website
          </Button>
        )}
      </ContentLayout>
    </Main>
  )
}

export default HomePage
