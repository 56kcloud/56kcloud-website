import Link from 'next/link'

export default function Contact () {
  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div>
        <p className='text-center xl:text-lg text-blue-dark'>In case you haven’t found the answer to your question please feel free to
          <Link href='#' className='font-normal text-orange-medium'>contact us</Link>, we will be happy to help you.</p>
      </div>
    </section>
  )
}
