import {faker} from '@faker-js/faker'

export default async function handler(req, res) {
  return res.status(200).json({date: faker.date.anytime()})
}
