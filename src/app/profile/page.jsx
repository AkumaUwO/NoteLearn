"use client"

import { useContext } from "react";

import { UserContex } from "@/contexts/UserContext";

export default function UserProfile() {

    const { userData } = useContext(UserContex);

    if (!userData) return;

    return (
        <section className="w-full">
            <div className="w-3/4 h-fit p-5 mx-auto">
                <div className="flex">
                    <i className="ri-account-circle-line text-6xl text-fuchsia-800"></i>
                    <div className="my-auto">
                        <h3 className="text-lg font-semibold">{userData.name}</h3>
                        <p>@{userData.username}</p>
                    </div>
                </div>

                <div className="mx-auto mt-5 w-full border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">
                    hola
                </div>

            </div>
        </section>
    );
};