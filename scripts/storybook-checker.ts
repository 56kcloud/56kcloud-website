import {exec} from 'child_process'
import {join} from 'path'
import fg from 'fast-glob'
import fs from 'fs'
import tablemark from 'tablemark'

const basePath = '../apps/www/src/components/ui'
const fileName = 'storybook-check.md'
;(async () => {
  const uiComponents = fg.sync(join(__dirname, `${basePath}/**/*/index.tsx`))
  const componentsCategories = fg
    .sync(join(__dirname, `${basePath}/*`), {onlyDirectories: true})
    .reduce((acc, path) => {
      const key = path.split('/').pop()?.toString() || ''
      return {
        ...acc,
        [key]: {
          path,
          total: 0,
          hasStory: 0
        }
      }
    }, {})

  function incrementCategory(path: string, hasStory: boolean) {
    const index = Object.keys(componentsCategories)
      .map((key) => path.includes(componentsCategories[key].path))
      .indexOf(true)
    componentsCategories[Object.keys(componentsCategories)[index]].total++
    hasStory && componentsCategories[Object.keys(componentsCategories)[index]].hasStory++
  }

  function getRelativePath(path: string) {
    return path.replace(join(__dirname, basePath), '.')
  }

  const componentsStories = await Promise.all(
    uiComponents.map(async (path) => {
      const splitedPath = path.split('/')
      splitedPath.pop()
      const parent = splitedPath.join('/')
      const name = parent.split('/').pop()
      const hasStory = fs.existsSync(`${parent}/${name}.stories.tsx`)
      incrementCategory(path, hasStory)
      return {
        name,
        hasStory,
        path: getRelativePath(parent)
      }
    })
  )

  const categoriesSummaryTable = Object.keys(componentsCategories).map((key) => {
    const {total, hasStory} = componentsCategories[key]
    const percentage = Math.round((hasStory / total) * 100)
    const percentageEmoji = percentage === 100 ? '🟢' : percentage > 80 ? '🟠' : '🔴'
    const percentageString = `${percentage}% - ${percentageEmoji}`
    return {
      Category: key,
      'Total components': total,
      'Has story': `${hasStory} - ${percentageString}`
    }
  })
  console.log(tablemark(categoriesSummaryTable))
  exec(`echo "## Storybook check summary:" > ${fileName}`)
  exec(`echo "${tablemark(categoriesSummaryTable)}" >> ${fileName}`)

  let missingStories = componentsStories.filter(({hasStory}) => !hasStory)
  if (missingStories.length > 0) {
    missingStories = tablemark(missingStories)
    exec(`echo "## Missing stories:" >> ${fileName}`)
    exec(`echo "${missingStories}" >> ${fileName}`)
    throw Error(`Missing stories: ${missingStories}`)
  }
})()
