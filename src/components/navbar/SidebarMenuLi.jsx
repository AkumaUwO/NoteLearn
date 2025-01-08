'use client'

import Link from "next/link";

export default function SidebarMenuLi({text, href, onClick}) {
    return (
        <li className={"w-full items-center py-3 border border-transparent border-b-gray-300"}>
            <Link href={href} className="text-lg sm:text-base" onClick={onClick}>
                {text}
            </Link>
        </li>
    );
};