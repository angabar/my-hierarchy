import React from 'react'

import { hierarchy } from './hierarchy-response/hierarchy'

import MyHierarchy from './MyHierarchy'

const App = (props) => {
  return (
    <div>
      <MyHierarchy hierarchy={[hierarchy]} />
    </div>
  )
}

export default App
