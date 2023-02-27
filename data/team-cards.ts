export type Card = {
  firstName: string
  lastName: string
  role: string
  image: string
}

export const teamCards: Array<Card> = [
  {
    firstName: 'Darragh',
    lastName: 'Grealish',
    role: 'Site Reliability Engineer & Managing Partner',
    image: '/images/darragh.jpeg'
  },
  {
    firstName: 'Jochen',
    lastName: 'Zehnder',
    role: 'Site Reliability Engineer & Managing Partner',
    image: '/images/jochen.jpeg'
  },
  {
    firstName: 'Jean-Pierre',
    lastName: 'Gehrig',
    role: 'Principal Programmer & Managing Partner',
    image: '/images/jean-pierre.jpeg'
  }
]
