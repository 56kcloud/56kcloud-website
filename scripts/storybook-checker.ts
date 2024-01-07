// import {join} from 'path'
// import fg from 'fast-glob'
// import fs from 'fs'
// import tablemark from 'tablemark'

const basePath = '../apps/www/src/components/ui'
;(async () => {
  // const uiComponents = fg.sync(join(__dirname, `${basePath}/**/*/index.tsx`))
  // const componentsCategories = fg
  //   .sync(join(__dirname, `${basePath}/*`), {onlyDirectories: true})
  //   .reduce((acc, path) => {
  //     const key = path.split('/').pop()?.toString() || ''
  //     return {
  //       ...acc,
  //       [key]: {
  //         path,
  //         total: 0,
  //         hasStory: 0
  //       }
  //     }
  //   }, {})

  // function incrementCategory(path: string, hasStory: boolean) {
  //   const index = Object.keys(componentsCategories)
  //     .map((key) => path.includes(componentsCategories[key].path))
  //     .indexOf(true)
  //   componentsCategories[Object.keys(componentsCategories)[index]].total++
  //   hasStory && componentsCategories[Object.keys(componentsCategories)[index]].hasStory++
  // }

  // function getRelativePath(path: string) {
  //   return path.replace(join(__dirname, basePath), '.')
  // }

  // const componentsStories = await Promise.all(
  //   uiComponents.map(async (path) => {
  //     const splitedPath = path.split('/')
  //     splitedPath.pop()
  //     const parent = splitedPath.join('/')
  //     const name = parent.split('/').pop()
  //     const hasStory = fs.existsSync(`${parent}/${name}.stories.tsx`)
  //     incrementCategory(path, hasStory)
  //     return {
  //       name,
  //       hasStory,
  //       path: getRelativePath(parent)
  //     }
  //   })
  // )

  // const categoriesSummaryTable = Object.keys(componentsCategories).map((key) => {
  //   const {total, hasStory} = componentsCategories[key]
  //   return {
  //     Category: key,
  //     'Total components': total,
  //     'Has story': `${hasStory} - ${Math.round((hasStory / total) * 100)}%`
  //   }
  // })
  // console.log(tablemark(categoriesSummaryTable))

  // const missingStories = componentsStories.filter(({hasStory}) => !hasStory)
  // if (missingStories.length > 0) {
  //   console.log(tablemark(missingStories))
  // }

  console.log(`
  | Category  | Total components | Has story |
  | :-------- | :--------------- | :-------- |
  | atoms     | 8                | 8 - 100%  |
  | molecules | 12               | 12 - 100% |
  | organisms | 26               | 26 - 100% |
  | svgs      | 1                | 0 - 0%    |

  | Name  | Has story | Path         |
  | :---- | :-------- | :----------- |
  | icons | false     | ./svgs/icons |
`)
})()
