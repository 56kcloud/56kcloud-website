import Head from 'next/head'

import Layout from '../components/layout'
import BackgroundImage from '../components/background-image'
import IntroPage from '../components/intro-page'
import DescriptionPage from '../components/description-page'
import { servicesInclude } from '../data/services-include'

export default function services () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Services</title>
      </Head>
      <section className='pb-12 px-36'>
        <div className='max-w-6xl mx-auto'>
          <div className='max-w-5xl mx-auto'>
            <BackgroundImage
              image='/images/people-group.png'
              title='Group of people background'
            />
          </div>
          <IntroPage
            surtitle='About our programs in:'
            title='Assessment, Migration & Acceleration'
            text='Over the years, we have accumulated a huge amount of knowledge on how to migrate on to the public cloud and operate workload in a secure and scalable way. We have seen many commonalities in all the projects and across different industries. We have packaged this knowledge to help our customers move faster and make use of the 1000s of hours we have spent in the cloud.'
          />
        </div>
      </section>
      <section className='section-padding'>
        <DescriptionPage
          surtitle='What do our services programs include:'
          text='We have learned that a lot of our customers have the same needs and requirements. Therefore, we build services that bring more value for less money to our customers. These provide ready-to-use components, while still allowing the adaption to each specific customer and team. These services include:'
          data={servicesInclude}
        />
      </section>
      <BackgroundImage image='/images/mountain-background.png' title='People standing in front of the mountain' className='-mt-[50rem]' />
    </Layout>
  )
}
