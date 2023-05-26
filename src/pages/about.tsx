import {PageProps} from '@/models/page.model'
import {getBaseCardsAbout} from '@/data/about'
import BaseCardList from '@/components/organisms/card-list/base'
import Gallery from '@/components/molecules/gallery'
import Image from 'next/image'
import Layout from '../components/organisms/layout'
import MediumTitleSection from '@/components/molecules/title-section/medium'
import TeamList from '@/components/organisms/team-list'
import divider from '../../public/images/dividers/dark.webp'

export default function About({t}: PageProps) {
  return (
    <Layout
      t={t}
      fullHeightHero
      title='56K.Cloud | About'
      description={t('about:introTitle')}
    >
      {({toggleIsOpen}) => (
        <>
          <MediumTitleSection
            title={t('about:introTitle')}
            textColLeft={t('about:introTextColLeft')}
            textColRight={t('about:introTextColRight')}/>
          <Gallery t={t}/>
          <BaseCardList
            cards={getBaseCardsAbout(t)}
            text={t('about:cardsWrapperSurtitle')}
            className='after:w-64'/>
          <Image
            src={divider}
            alt='Plants divider'
            className='background-image -mt-[7rem] sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96'/>
          <TeamList
            toggleContactModal={toggleIsOpen}
            t={t}/>
        </>
      )}
    </Layout>
  )
}
