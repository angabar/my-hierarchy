/**
 * a funtion that return a conditional that check if element is an array and its
 * lenght is greater than 0
 * @param {any[]} arrayToCheck - a list of elements
 * @returns boolean
 */
export const safeArrayAccesor = (arrayToCheck) => {
    return (
        arrayToCheck && Array.isArray(arrayToCheck) && arrayToCheck.length > 0
    );
};

/**
 * a function that returns the parent of all nodes
 * @param {Object} hierarchyDictionary - a hierarchy dictionary
 * @returns hierarchyNode | null
 */
export const findParentHierarchy = (hierarchyDictionary) => {
    const parentNode = Object.values(hierarchyDictionary).find(
        (node) => !node.parentId
    );

    if (parentNode) {
        return parentNode;
    }

    return null;
};

/**
 * a function that returns a node hierarchy
 * @param {Object} hierarchyDictionary - a hierarchyDictionary
 * @param {Object} nodeId - a node to find
 * @returns hierarchyNode | null
 */
export const findNodeById = (hierarchyDictionary, nodeId) => {
    const foundedNode = Object.values(hierarchyDictionary).find(
        (node) => node.id === nodeId
    );

    if (foundedNode) {
        return foundedNode;
    }

    return null;
};

export const getDirectChilds = (elementsList) => {
    if (
        elementsList &&
        Array.isArray(elementsList) &&
        elementsList.length > 0
    ) {
        return elementsList.map((element) => element.id);
    }

    return [];
};

export const hierarchyDictioanryConstructor = (hierarchy) => {
    const hierarchyDictionary = {};

    const hierarchyRecursiveSearcher = (nodeList) => {
        if (safeArrayAccesor(nodeList)) {
            nodeList.forEach((node) => {
                hierarchyDictionary[node.id] = node;

                if (safeArrayAccesor(node.children)) {
                    hierarchyRecursiveSearcher(node.children);
                }
            });
        }
    };

    hierarchyRecursiveSearcher(hierarchy);

    return hierarchyDictionary;
};

export const getParentIdNodes = (hierarchyDictionary, dmaId) => {
    let parentList = [];
    let parentId = dmaId;
    let parentHierarchyNode = findParentHierarchy(hierarchyDictionary);

    while (parentId) {
        const parentIdFounded = hierarchyDictionary[parentId].parentId;

        if (parentIdFounded) {
            parentList.unshift(parentIdFounded);
        }

        parentId = parentIdFounded;
    }

    parentList.push(dmaId);
    parentList.unshift(parentHierarchyNode.id);

    return parentList;
};
