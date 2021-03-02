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

export const getParentIdNodes = ({ children = [], ...object }, idToFind) => {
    let result;

    if (object.id === idToFind) return object;

    return (
        children.some((o) => (result = getParentIdNodes(o, idToFind))) &&
        Object.assign({}, object, { children: [result] })
    );
};
