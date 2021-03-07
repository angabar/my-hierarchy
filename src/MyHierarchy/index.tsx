import React, { useState, useEffect, FC } from 'react'
import { getDirectChilds, getParentIdNodes } from './helpers'
import MyHierarchy from './MyHierarchy'

const MyHierarchyProvider: FC<{ hierarchy: any }> = ({ hierarchy }) => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [openElementsId, setOpenElementsId] = useState(
    getDirectChilds(hierarchy),
  )

  useEffect(() => {
    const parentNodes = 4285
    if (parentNodes === 4285) {
      const parentsList = getParentIdNodes(4285, hierarchy[0])
      setOpenElementsId(parentsList)
    }
  }, [hierarchy])

  return (
    <div>
      <MyHierarchy
        hierarchy={hierarchy}
        openElementsId={openElementsId}
        setOpenElementsId={setOpenElementsId}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
    </div>
  )
}

export default MyHierarchyProvider
