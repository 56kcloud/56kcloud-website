export function slugify (string: string) {
  return string.toLowerCase().replace(/ /g, '-')
}
