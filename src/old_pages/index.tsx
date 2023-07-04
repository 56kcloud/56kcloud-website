import {PageProps} from '@/models/page.model'
import {getDarkIllustrationCardsHome, getLightIllustrationCardsHome} from '@/data/illustration-cards'
import Buro from '../../public/images/backgrounds/buro.webp'
import CompanyList from '@/components/organisms/company-list'
import HomeHero from '@/components/molecules/home-hero'
import IllustrationCardList from '@/components/organisms/card-list/illustration'
import Image from 'next/image'
import Layout from '../components/organisms/layout'
import SmallTitleSection from '@/components/molecules/title-section/small'

export default function Home({t}: PageProps) {
  return (
    <Layout
      t={t}
      fullHeightHero
      title='56K.Cloud'
      description={t('home:textIntro')}
    >
      <HomeHero t={t}/>
      <SmallTitleSection
        text={t('home:textIntro')}
        title={t('home:titleIntro')}
      />
      <IllustrationCardList
        title='Services'
        cards={getDarkIllustrationCardsHome(t)}
      />
      <Image
        src={Buro}
        alt={t('home:alt')}
        className='background-image bg-primary-lighter'/>
      <IllustrationCardList
        title='Services'
        theme='light'
        cards={getLightIllustrationCardsHome(t)}
      />
      <CompanyList/>
    </Layout>
  )
}
