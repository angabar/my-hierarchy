import React, { useState } from 'react'
import { getDirectChilds } from './helpers'

import './my-hierarchy.css'

const MyHierarchy = ({
  hierarchy,
  openElementsId,
  setOpenElementsId,
  selectedNode,
  setSelectedNode,
}) => {
  const handleNodeSelection = (id) => {
    const foundedNodeId = openElementsId.find((nodeToFind) => nodeToFind === id)

    if (foundedNodeId) {
      const filteredNodeId = openElementsId.filter(
        (nodeToRemove) => nodeToRemove !== id,
      )

      setOpenElementsId(filteredNodeId)
    } else {
      setOpenElementsId([...openElementsId, id])
    }
  }

  return (
    <div>
      {hierarchy?.map((hierarchyNode, index) => (
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
