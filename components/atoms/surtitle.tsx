import classNames from '../../utils/classes'

export default function Surtitle ({ text, className = '' }) {
  return (
    <span className={classNames('mb-8 text-orange-medium font-graphik font-semibold tracking-wide flex items-center after:content-[\'\'] after:bg-black after:block after:h-[1px] after:ml-6 after:mr-6 after:w-24 after:opacity-10', className)}>
      {text}
    </span>
  )
}
