export type nodeType = {
  label: string
  value: string
  icon?: string
  favourite?: boolean
  sensorizable?: boolean
  id: number
  parentId?: number | null
  tag?: string[] | null
  alarms?: string[] | null
  children: nodeType[]
}

export type hierarchyDictionaryType = {
  [key: number]: nodeType
}

export type myHierarchyPropsType = {
  hierarchy: nodeType[]
  openElementsId: number[]
  setOpenElementsId: Function
  selectedNode: nodeType | null
  setSelectedNode: Function
}

export type myHierarchyProviderPropsType = {
  hierarchy: nodeType[]
}
