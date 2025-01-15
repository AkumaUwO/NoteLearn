"use client"

import { useContext } from "react";

import { UserContex } from "@/contexts/UserContext";

export default function NavSession({ sessionSidebar, toggleSidebar }) {
    const { userData } = useContext(UserContex);

    return (
        <div className="right-0 space-x-4 flex text-right">
            <h2 className="m-auto text-white text-lg font-semibold cursor-pointer" onClick={toggleSidebar}>
                {userData?.name}
            </h2>

            <button onClick={toggleSidebar}>
                <i className={`ri-account-circle-fill text-5xl mr-2 transition-all sm:text-6xl ${sessionSidebar ? "text-cyan-300" : "text-white"}`} />
            </button>
        </div>
    );
};