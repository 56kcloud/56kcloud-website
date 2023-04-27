// TO REMOVE
export default function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ')
}

import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
