export default function BackgroundImage ({ image, title }) {
  return (
    <div className='relative w-full pointer-events-none bg-blue-lighter'>
      <img src={image} alt={title} className='w-full' />
    </div>
  )
}
