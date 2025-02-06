"use client"

import { useContext } from "react";

import { UserContex } from "@/contexts/UserContext";
import ScoresTable from "@/components/profile/ScoresTable";

export default function UserProfile() {

    const { userData, userScores } = useContext(UserContex);

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

                <ScoresTable scores={userScores}/>

            </div>
        </section>
    );
};