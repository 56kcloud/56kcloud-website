import {PageProps} from '@/models/page.model'
import {getDetailsCardsTraining, getListDetailsTraining} from '@/data/training'
import ContactSection from '@/components/atoms/contact'
import Description from '@/components/organisms/description'
import DetailCardList from '@/components/organisms/card-list/detail'
import Head from 'next/head'
import Image from 'next/image'
import LargeTitleSection from '@/components/molecules/title-section/large'
import Layout from '../components/organisms/layout'
import divider from '../../public/images/dividers/light.webp'
import groupOfPeople from '../../public/images/illustrations/group-of-people.webp'
import mountain from '../../public/images/backgrounds/mountain.webp'

export default function Training({t}: PageProps) {
  return (
    <Layout t={t}>
      {({toggleIsOpen}) => (
        <>
          <Head>
            <title>56K.Cloud | Training</title>
          </Head>
          <LargeTitleSection
            backgroundImage={{
              src: groupOfPeople,
              alt: 'group of people',
              className: 'w-[90%]'
            }}
            surtitle={t('training:introSurtitle')}
            title={t('training:introTitle')}
            text={t('training:introText')}/>
          <Description
            surtitle={t('training:descriptionSurtitle')}
            text={t('training:descriptionText')}
            details={getListDetailsTraining(t)}/>
          <Image
            src={mountain}
            alt={t('training:altMainIllustration')}
            className='background-image -mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem]
             2xl:-mt-[50rem]'/>
          <DetailCardList
            title={t('training:verticalTitle')}
            cards={getDetailsCardsTraining(t)}
            titleClassName='text-white'
          />
          <Image
            src={divider}
            alt={t('training:altDivider')}
            className='-mt-12 background-image sm:-mt-24 md:-mt-28 lg:-mt-36 xl:-mt-44 2xl:-mt-56'/>
          <ContactSection toggleContactModal={toggleIsOpen}/>
        </>
      )}
    </Layout>
  )
}
