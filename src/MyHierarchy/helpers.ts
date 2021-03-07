import { hierarchyDictionaryType, nodeType } from './types/types'

export const safeArrayAccesor = (arrayToCheck: unknown[]): boolean => {
  return arrayToCheck && Array.isArray(arrayToCheck) && arrayToCheck.length > 0
}

export const findParentHierarchy = (
  hierarchyDictionary: hierarchyDictionaryType,
): nodeType | null => {
  const parentNode = Object.values(hierarchyDictionary).find(
    (node: nodeType) => !node.parentId,
  )

  if (parentNode) {
    return parentNode
  }

  return null
}

export const findNodeById = (
  hierarchyDictionary: hierarchyDictionaryType,
  nodeId: number,
): nodeType | null => {
  const foundedNode = Object.values(hierarchyDictionary).find(
    (node: nodeType) => node.id === nodeId,
  )

  if (foundedNode) {
    return foundedNode
  }

  return null
}

export const getDirectChilds = (elementsList: nodeType[]): number[] | [] => {
  if (safeArrayAccesor(elementsList)) {
    return elementsList.map((element: nodeType) => element.id)
  }

  return []
}

export const hierarchyDictioanryConstructor = (
  hierarchy: nodeType[],
): hierarchyDictionaryType => {
  const hierarchyDictionary = {}

  const hierarchyRecursiveSearcher = (nodeList: nodeType[]) => {
    if (safeArrayAccesor(nodeList)) {
      nodeList.forEach((node: nodeType) => {
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

export const getParentIdNodes = (
  hierarchyDictionary: hierarchyDictionaryType,
  dmaId: number,
): number[] => {
  const parentList: number[] = []
  let parentId: number | null = dmaId
  const parentHierarchyNode: nodeType | null = findParentHierarchy(
    hierarchyDictionary,
  )

  while (parentId) {
    const parentIdFounded = hierarchyDictionary[parentId].parentId

    if (parentIdFounded) {
      parentList.unshift(parentIdFounded)
    }

    parentId = parentIdFounded
  }

  parentList.push(dmaId)

  if (parentHierarchyNode?.id) {
    parentList.unshift(parentHierarchyNode.id)
  }

  return parentList
}
