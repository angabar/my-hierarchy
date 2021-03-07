export const getDirectChilds = (elementsList?: any[]): any[] => {
  if (elementsList && Array.isArray(elementsList) && elementsList.length > 0) {
    return elementsList.map((element) => element.id)
  }

  return []
}

/* export const getParentIdNodes = ({ children = [], ...object }, idToFind) => {
    let result;

    if (object.id === idToFind) return object;

    return (
        children.some((o) => (result = getParentIdNodes(o, idToFind))) &&
        Object.assign({}, object, { children: [result] })
    );
}; */

export const getParentIdNodes = (id: number, tree = null): any[] => {
  const loop = (path, node) =>
    node.id === id
      ? [path]
      : node.children.reduce(
          (acc, child) => acc.concat(loop([...path, node], child)),
          [],
        )

  const foundedParents = loop([], tree)

  if (
    foundedParents &&
    Array.isArray(foundedParents) &&
    foundedParents.length > 0
  ) {
    return foundedParents[0].map((item) => item.id)
  }

  return []
}
