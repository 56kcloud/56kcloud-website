export const api = process.env.NEXT_PUBLIC_API || ''
export const hostname = 
  `http${process.env.NEXT_PUBLIC_ENV === 'local' ? '' : 's'}://${process.env.NEXT_PUBLIC_VERCEL_URL}` || ''
