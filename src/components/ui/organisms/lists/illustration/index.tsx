import {IllustrationCardPropsImpl} from '@/components/ui/molecules/cards/illustration/illustration-card.model'
import {cn} from '@/utils/toolbox'
import IllustrationCard from '@/components/ui/molecules/cards/illustration'
import VerticalTitle from '@/components/ui/atoms/titles/vertical'

export type IllustrationCardListProps = {
  theme?: 'dark' | 'light'
  title: string
  illustrationCards: Array<IllustrationCardPropsImpl>
}

export default function IllustrationCardList({theme='dark', title, illustrationCards}
  : IllustrationCardListProps) {
  return (
    <section className={cn(theme === 'dark' ? 'bg-primary-900' : 'bg-primary-50', 'section-padding relative')}>
      <VerticalTitle
        title={title}
        styleCard='illustrationCard'
        theme={theme}
        classNameText={cn(theme === 'dark' ? 'text-white' : 'text-blue-dark')}
      />
      <div className='flex flex-col space-y-28'>
        {illustrationCards.map((card) => 
          <IllustrationCard
            theme={theme}
            key={card.title}
            {...card}
          />
        )}
      </div>
    </section>
  )
}
