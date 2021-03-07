import React, { useState, useEffect } from "react";
import {
    findNodeById,
    getDirectChilds,
    getParentIdNodes,
    hierarchyDictioanryConstructor,
} from "./helpers";
import MyHierarchy from "./MyHierarchy";

const MyHierarchyProvider = ({ hierarchy }) => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [openElementsId, setOpenElementsId] = useState(
        getDirectChilds(hierarchy)
    );
    const [hierarchyDictionary, setHierarchyDictionary] = useState({});

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
    }, []);

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
    );
};

export default MyHierarchyProvider;
