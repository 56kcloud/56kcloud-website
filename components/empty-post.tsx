import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const Component = (props) => <p {...props} />

const EmptyPost = () => {
  const { t } = useTranslation('blog')
  return (
    <div className='flex flex-col overflow-hidden bg-blue-100 border-2 border-dashed rounded-lg shadow-lg bg-opacity-5'>
      <div className='h-48 bg-blue-200 border-b bg-opacity-10'>
      </div>
      <div className='flex flex-col justify-between flex-1 p-6'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-blue-300'>
            {t('emptyKind')}
          </p>
          <button onClick={async () => await setLanguage('en')} className='pt-2 text-left'>
            <p className='text-xl font-semibold text-white'>{t('emptyTitle')}</p>
            <p className='mt-3 text-base text-blue-300'>
              <Trans
                i18nKey='blog:emptyBody'
                components={[<Component />, <span className='font-semibold text-white hover:underline'></span>]}
                values={{ language: t('common:english') }}
              />
            </p>
          </button>
        </div>
        <div className='h-32 mt-1'></div>
      </div>
    </div>
  )
}

export default EmptyPost
