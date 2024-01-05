import {join} from 'path'
import fg from 'fast-glob'
import fs from 'fs'
;(async () => {
  const uiComponents = fg.sync(join(__dirname, `../src/components/ui/**/*/index.tsx`))
  console.log(process.cwd())
  const componentsStories = await Promise.all(
    uiComponents.map(async (path) => {
      const splitedPath = path.split('/')
      splitedPath.pop()
      const parent = splitedPath.join('/')
      const name = parent.split('/').pop()
      const fileExists = fs.existsSync(`${parent}/${name}.stories.tsx`)
      if (fileExists) {
        const projectName = process.cwd().split('/').pop() || ''
        const relativePath = `.${parent.split(projectName)[1]}`
        return {name, hasStory: '✅', path: `${relativePath}/${name}.stories.tsx`}
      } else {
        return {name, hasStory: '❌', path: ''}
      }
    })
  )
  console.log(JSON.stringify(componentsStories))
})()
