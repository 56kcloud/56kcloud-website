function generateNesting(basePaths: Array<string>, keys: Array<string>, depth: number) {
  const nesting = [...basePaths]
  let newNesting = [...basePaths]

  for(let d = 1; d <= depth; d++){
    newNesting = nesting.filter((_item, index) => { 
      return index >= nesting.length - newNesting.length 
    })
    
    newNesting.forEach((path) => {
      keys.forEach((key) => {
        nesting.push(`${path}.${key}`)  
      })
    })
  }

  return nesting
}

  let props = [
    'image',
    'cover',
    // 'author',
    // 'avatar'
  ]
  
  const test = ['hello', 'world']
  console.log(generateNesting(test, props, 5))