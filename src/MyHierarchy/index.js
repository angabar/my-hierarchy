import React, { useState } from "react";

import "./my-hierarchy.css";

const MyHierarchy = ({ hierarchy }) => {
    const [hideElementsId, setHideElementsId] = useState([]);

    const handleNodeSelection = (id) => {
        const foundedNodeId = hideElementsId.find(
            (nodeToFind) => nodeToFind === id
        );

        if (foundedNodeId) {
            const filteredNodeId = hideElementsId.filter(
                (nodeToRemove) => nodeToRemove !== id
            );

            setHideElementsId(filteredNodeId);
        } else {
            setHideElementsId([...hideElementsId, id]);
        }
    };

    return (
        <div>
            {hierarchy?.map((hierarchyNode, index) => (
                <ul key={`${hierarchyNode.id}-${index}`}>
                    <div
                        className="node-main-container"
                        onClick={() => handleNodeSelection(hierarchyNode.id)}
                    >
                        {hierarchyNode.children?.length > 0 && (
                            <div className="node-main-container-symbol">
                                &#x276F;
                            </div>
                        )}
                        <div>{hierarchyNode.label}</div>
                    </div>
                    {hierarchyNode.children?.length > 0 &&
                        !hideElementsId.includes(hierarchyNode.id) && (
                            <MyHierarchy hierarchy={hierarchyNode.children} />
                        )}
                </ul>
            ))}
        </div>
    );
};

export default MyHierarchy;
