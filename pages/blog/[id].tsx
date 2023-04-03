import {useRouter} from 'next/router'


export default function Post() {
  const router = useRouter()
  const query = router.query
  const post = query.post

  return (
    <div>
      <h3>{post}</h3>
    </div>
  )
}
