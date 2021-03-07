import React, { useState, useEffect } from 'react'
import {
  findNodeById,
  getDirectChilds,
  getParentIdNodes,
  hierarchyDictioanryConstructor,
} from './helpers'
import MyHierarchy from './MyHierarchy'
import {
  hierarchyDictionaryType,
  myHierarchyProviderPropsType,
  nodeType,
} from './types/types'

const MyHierarchyProvider = ({ hierarchy }: myHierarchyProviderPropsType) => {
  const [selectedNode, setSelectedNode] = useState<nodeType | null>(null)
  const [
    hierarchyDictionary,
    setHierarchyDictionary,
  ] = useState<hierarchyDictionaryType>({})
  const [openElementsId, setOpenElementsId] = useState<number[]>(
    getDirectChilds(hierarchy),
  )

  useEffect(() => {
    const hierarchyDictionaryResult = hierarchyDictioanryConstructor(hierarchy)

    setHierarchyDictionary(hierarchyDictionaryResult)

    const tempNode = 4285

    if (tempNode) {
      const parentsList = getParentIdNodes(hierarchyDictionaryResult, 4285)

      setOpenElementsId(parentsList)
      setSelectedNode(findNodeById(hierarchyDictionaryResult, 4285))
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
