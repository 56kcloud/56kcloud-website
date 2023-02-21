import Link from 'next/link'

export default function Contact () {
  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div className='text-center'>
        <p className='text-lg font-light text-blue-dark font-graphik'>In case you haven’t found the answer to your question please feel free to <Link href='#' className='font-normal text-orange-medium'>contact us</Link>, we will be happy to help you.</p>
      </div>
    </section>
  )
}
