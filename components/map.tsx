import useTranslation from 'next-translate/useTranslation'

export default function Map () {
  const { t } = useTranslation('about')
  return (
    <div className='flex m-auto bg-blue-900'>
      <div className='w-full pt-16 pb-20 mx-auto max-w-7xl lg:py-32 lg:text-left'>
        <div className='pl-6 ml-80'>
          <h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>{t('address')}</h1>
          <address className='mt-3 text-lg text-gray-300 sm:text-xl md:mt-5'>
            Edeltech Ltd<br/>
            Chemin Saint-Hubert 5<br/>
            1950 Sion<br/>
            Valais<br/>
            Switzerland
          </address>
        </div>
      </div>
      <div className='w-full'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.293906417517!2d7.3494251160328545!3d46.2244996791173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ec8341ef88b01%3A0xb49b036cb8062646!2sEdeltech!5e0!3m2!1sen!2sch!4v1639121306188!5m2!1sen!2sch'
          width='max' height='max' allowFullScreen={true} loading='lazy' className='object-cover w-full h-full'></iframe>
      </div>
    </div>
  )
}
