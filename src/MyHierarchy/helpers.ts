/**
 * a funtion that return a conditional that check if element is an array and its
 * lenght is greater than 0
 * @param {any[]} arrayToCheck - a list of elements
 * @returns boolean
 */
export const safeArrayAccesor = (arrayToCheck) => {
  return arrayToCheck && Array.isArray(arrayToCheck) && arrayToCheck.length > 0
}

/**
 * a function that returns the parent of all nodes
 * @param {Object} hierarchyDictionary - a hierarchy dictionary
 * @returns hierarchyNode | null
 */
export const findParentHierarchy = (hierarchyDictionary) => {
  const parentNode = Object.values(hierarchyDictionary).find(
    (node: any) => !node.parentId,
  )

  if (parentNode) {
    return parentNode
  }

  return null
}

/**
 * a function that returns a node hierarchy
 * @param {Object} hierarchyDictionary - a hierarchyDictionary
 * @param {Object} nodeId - a node to find
 * @returns hierarchyNode | null
 */
export const findNodeById = (hierarchyDictionary, nodeId) => {
  const foundedNode = Object.values(hierarchyDictionary).find(
    (node: any) => node.id === nodeId,
  )

  if (foundedNode) {
    return foundedNode
  }

  return null
}

/**
 * a function to return direct child ids
 * @param {any[]} elementsList - a list of elements with ids
 * @returns any[]
 */
export const getDirectChilds = (elementsList) => {
  if (safeArrayAccesor(elementsList)) {
    return elementsList.map((element) => element.id)
  }

  return []
}

/**
 * a function that converts hierarchy array into dictionary
 * @param {any[]} hierarchy - a hierarchy array of elements
 * @returns Object
 */
export const hierarchyDictioanryConstructor = (hierarchy) => {
  const hierarchyDictionary = {}

  const hierarchyRecursiveSearcher = (nodeList) => {
    if (safeArrayAccesor(nodeList)) {
      nodeList.forEach((node) => {
        hierarchyDictionary[node.id] = node

        if (safeArrayAccesor(node.children)) {
          hierarchyRecursiveSearcher(node.children)
        }
      })
    }
  }

  hierarchyRecursiveSearcher(hierarchy)

  return hierarchyDictionary
}

/**
 * a function to find all parentId of argument
 * @param {Object} hierarchyDictionary - a hierarchy dictionary
 * @param {number} dmaId - an id of node to find
 * @returns number[]
 */
export const getParentIdNodes = (hierarchyDictionary, dmaId) => {
  let parentList: any[] = []
  let parentId = dmaId
  let parentHierarchyNode: any = findParentHierarchy(hierarchyDictionary)

  while (parentId) {
    const parentIdFounded = hierarchyDictionary[parentId].parentId

    if (parentIdFounded) {
      parentList.unshift(parentIdFounded)
    }

    parentId = parentIdFounded
  }

  parentList.push(dmaId)
  parentList.unshift(parentHierarchyNode.id)

  return parentList
}
