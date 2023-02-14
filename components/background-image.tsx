export default function BackgroundImage ({ image, title }) {
  return (
    <div className='bg-blue-lighter'>
      <img src={image} alt={title} className='w-full' />
    </div>
  )
}
