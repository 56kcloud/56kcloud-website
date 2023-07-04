import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {usePathname, useRouter} from 'next/navigation'
import ListBox from '@/components/molecules/listbox'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const {register, setValue, watch} = useForm()
  const defaultValue = router.locale.toUpperCase()
  const languageWatcher = watch('language', defaultValue)

  useEffect(() => {
    const lang = languageWatcher?.toString()
    if (lang) {
      lang !== defaultValue
        && router.push(`${pathname}`, `${pathname}`, {locale: lang.toLowerCase()})
    }
  }, [languageWatcher])
  
  return (
    <form>
      <ListBox
        register={register}
        name='language'
        setValue={setValue}
        data={router.locales.map(lang => lang.toUpperCase())}
        defaultValue={defaultValue}
      />
    </form>
  )
}
