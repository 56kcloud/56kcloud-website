export default function NavButton ({ children }) {
  return (
    <button
      type='button'
      className='inline-flex items-center px-6 py-3 ml-8 text-sm font-medium tracking-widest uppercase border border-transparent rounded-md shadow-sm font-graphik text-blue-dark bg-blue-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    >
      {children}
    </button>
  )
}
