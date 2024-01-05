import {join} from 'path'
import fg from 'fast-glob'
import fs from 'fs'
import tablemark from 'tablemark'
;(async () => {
  const uiComponents = fg.sync(join(__dirname, `../src/components/ui/**/*/index.tsx`))
  const componentsStories = await Promise.all(
    uiComponents.map(async (path) => {
      const splitedPath = path.split('/')
      splitedPath.pop()
      const parent = splitedPath.join('/')
      const name = parent.split('/').pop()
      const fileExists = fs.existsSync(`${parent}/${name}.stories.tsx`)
      if (fileExists) {
        return {name, hasStory: '✅', path: `${parent}/${name}.stories.tsx`}
      } else {
        return {name, hasStory: '❌', path: ''}
      }
    })
  )
  console.log(tablemark(componentsStories))
})()
