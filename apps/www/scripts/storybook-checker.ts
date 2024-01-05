import {exec} from 'child_process'
import fg from 'fast-glob'
import fs from 'fs'
;(async () => {
  const uiComponents = fg.sync('src/components/ui/**/*/index.tsx')
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
  console.log(JSON.stringify(componentsStories))
  const componentsWithoutStories = componentsStories.filter((c) => c.hasStory === '❌').length
  const componentsWithStories = componentsStories.filter((c) => c.hasStory === '✅').length
  console.log('components with stories', `${componentsWithStories}/${componentsStories.length}`)
  console.log('components without stories', `${componentsWithoutStories}/${componentsStories.length}`)
  exec(`echo "summary=${JSON.stringify(componentsStories)}\n' >> $GITHUB_OUTPUT`)
  if (componentsWithoutStories > 0) {
    throw new Error(
      `${componentsWithoutStories} component${componentsWithoutStories > 1 ? 's are' : ' is'} missing a storybook file`
    )
  }
})()
