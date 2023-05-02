import Button from '@/components/atoms/button'
import Link from 'next/link'

export default function test() {
  return (
    <Button
      as={Link}
      href='/'
    >
      TEST
    </Button>
  )
}
