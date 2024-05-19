"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Groups = ({ groupName, subItems }) => {
    const [showMembers, setShowMembers] = useState(false);

    const toggleShowMembers = () => {
        setShowMembers(!showMembers);
    };

    return (
        <div className="bg-white hover:bg-gray-200 rounded-lg shadow-md p-4 mb-2 cursor-pointer" onClick={toggleShowMembers}>
            <p className="font-semibold">{groupName}</p>
            {showMembers && (
                <ul className="mt-2">
                    {subItems.map((item, index) => (
                        <li key={index} className="mb-1">
                            <a className="text-blue-500 hover:underline">{item}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Groups;
