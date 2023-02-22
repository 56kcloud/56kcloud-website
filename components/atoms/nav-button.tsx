import Img from './img'

export default function NavButton ({ children, src, alt, setOpen }) {
  return (
    <button onClick={() => setOpen(open => !open)} className='inline-flex items-center px-4 py-3 ml-8 text-xs font-medium tracking-widest uppercase border border-transparent rounded-md shadow-sm lg:px-6 lg:text-sm bg-blue-light'>
      <div className='flex items-center gap-x-4'>
        {children}
        <Img src={src} alt={alt} width={14} height={14} className='-translate-y-0.5' />
      </div>
    </button>
  )
}
