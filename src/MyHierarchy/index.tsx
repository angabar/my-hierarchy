import React, { useState, useEffect, FC } from 'react'
import { getDirectChilds, getParentIdNodes } from './helpers'
import MyHierarchy from './MyHierarchy'

const MyHierarchyProvider: FC<{ hierarchy: any }> = ({ hierarchy }) => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [openElementsId, setOpenElementsId] = useState(
    getDirectChilds(hierarchy),
  )

  useEffect(() => {
    const hierarchyDictionaryResult = hierarchyDictioanryConstructor(
        hierarchy
    );

    setHierarchyDictionary(hierarchyDictionaryResult);

    if (4285) {
        const parentsList = getParentIdNodes(
            hierarchyDictionaryResult,
            4285
        );

        setOpenElementsId(parentsList);
        setSelectedNode(findNodeById(hierarchyDictionaryResult, 4285));
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
