import React, { useState, useEffect } from "react";
import { getDirectChilds, getParentIdNodes } from "./helpers";
import MyHierarchy from "./MyHierarchy";

const MyHierarchyProvider = ({ hierarchy }) => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [openElementsId, setOpenElementsId] = useState(
        getDirectChilds(hierarchy)
    );

    useEffect(() => {
        if (4285) {
            const parentsList = getParentIdNodes(4285, hierarchy[0]);
            setOpenElementsId(parentsList);
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
