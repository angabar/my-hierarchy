import React, { FC } from 'react'

import './my-hierarchy.css'
import { myHierarchyPropsType, nodeType } from './types/types'

const MyHierarchy = ({
  hierarchy,
  openElementsId,
  setOpenElementsId,
  selectedNode,
  setSelectedNode,
}: myHierarchyPropsType) => {
  const handleNodeSelection = (id: number) => {
    const foundedNodeId = openElementsId.find(
      (nodeToFind: number) => nodeToFind === id,
    )

    if (foundedNodeId) {
      const filteredNodeId = openElementsId.filter(
        (nodeToRemove: number) => nodeToRemove !== id,
      )

      setOpenElementsId(filteredNodeId)
    } else {
      setOpenElementsId([...openElementsId, id])
    }
  }

  return (
    <div>
      {hierarchy?.map((hierarchyNode: nodeType, index: number) => (
        <ul key={`${hierarchyNode.id}-${index}`}>
          <div className="node-main-container">
            {hierarchyNode.children?.length > 0 && (
              <div
                className="node-main-container-symbol"
                onClick={() => handleNodeSelection(hierarchyNode.id)}
              >
                &#x276F;
              </div>
            )}
            <div
              onClick={() => setSelectedNode(hierarchyNode)}
              className={`${
                selectedNode?.id === hierarchyNode.id ? 'active-node' : ''
              }`}
            >
              {hierarchyNode.label}
            </div>
          </div>
          {hierarchyNode.children?.length > 0 &&
            openElementsId &&
            openElementsId.includes(hierarchyNode.id) && (
              <MyHierarchy
                hierarchy={hierarchyNode.children}
                openElementsId={openElementsId}
                setOpenElementsId={setOpenElementsId}
                selectedNode={selectedNode}
                setSelectedNode={setSelectedNode}
              />
            )}
        </ul>
      ))}
    </div>
  )
}

export default MyHierarchy
