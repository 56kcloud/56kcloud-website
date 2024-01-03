import {nextAPIToken} from '../../../configs/server'

export async function protectedAPI(request: Request, success: () => Promise<Response>) {
  const token = request.headers.get('Authorization')
  if (token === nextAPIToken) {
    return await success()
  } else {
    return new Response('Unauthorized', {
      status: 401,
      statusText: 'Unauthorized'
    })
  }
}
