import React, { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Drawer state

    const toggleDrawer = () => {
        setIsOpen(!isOpen); // Toggle sidebar
    };

    return (
        <>
            <div className={`
                fixed top-17 left-0 h-full bg-base-200 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-24"} transition-transform duration-300 ease-in-out w-64
                flex
                flex-col
                items-end
                `}>
                {/* Drawer button */}
                <button onClick={toggleDrawer} className="btn btn-primary m-4 text-right">
                    {isOpen ? "Close Sidebar" : "Open Sidebar"}
                </button>

                <ul className="menu p-4">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
