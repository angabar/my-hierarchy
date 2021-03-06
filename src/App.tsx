import React, { FC } from 'react'

import { hierarchy } from './hierarchy-response/hierarchy'

import MyHierarchy from './MyHierarchy'

const App: FC = () => {
  return (
    <div>
      <MyHierarchy hierarchy={[hierarchy]} />
    </div>
  )
}

export default App
