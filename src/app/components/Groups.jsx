"use client";
import React, { useState } from "react";

const Groups = ({ index, groupName }) => {
    const [showMembers, setShowMembers] = useState(false);

    const toggleShowMembers = () => {
        setShowMembers(!showMembers);
    };

    return (
        <div className="bg-white hover:bg-gray-200 rounded-lg shadow-md p-2 mb-2" onClick={toggleShowMembers}>
            <p>{groupName}</p>
            {showMembers && (
                <ul>
                    <li>Sub-item 1</li>
                    <li>Sub-item 2</li>
                    <li>Sub-item 3</li>
                </ul>
            )}
        </div>
    );
};

export default Groups;
