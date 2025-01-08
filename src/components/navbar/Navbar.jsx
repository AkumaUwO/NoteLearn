"use client"

import { useState } from "react";

import Link from "next/link";

import AppLogo from "./AppLogo";
import NavSession from "./NavSession";
import NavSessionSidebar from "./NavSessionSidebar";

export default function Navbar() {

    const [sessionSidebar, setSessionSidebar] = useState(false);

    const toggleSidebar = () => {
        setSessionSidebar(!sessionSidebar);
    };

    return (
        <nav>
            <div className="fixed h-fit top-0 left-0 w-screen bg-fuchsia-700 z-50 p-1 shadow-lg sm:h-[80px] flex justify-between items-center">
                <div className="p-2 w-fit h-fit">
                    <Link href={"/"}>
                        <AppLogo width={"50px"} height={"50px"} />
                    </Link>
                </div>

                <div>
                    <NavSession
                        sessionSidebar={sessionSidebar}
                        toggleSidebar={toggleSidebar}
                    />
                </div>
            </div>
            <div>
                <NavSessionSidebar
                    sessionSidebar={sessionSidebar}
                    toggleSidebar={toggleSidebar}
                />
            </div>
        </nav>
    );
};