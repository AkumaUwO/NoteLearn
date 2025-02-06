'use client'

import {
    createContext,
    useState,
    useEffect
} from "react";

import { get_UserSocres, create_score, upadate_score } from "@/api/user.api";

export const UserContex = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState();
    const [auth, setAuth] = useState();

    const [userScores, setUserScores] = useState();

    const getUserSession = () => {
        if (typeof window !== "undefined") {
            const storedUser = sessionStorage.getItem("user");
            const user = storedUser ? JSON.parse(storedUser) : null;

            setUserData(user);
        };
    };

    const fetchScores = async () => {
        if (!userData) return;

        const fetchedScores = await get_UserSocres();

        const filteredScores = fetchedScores.scores.filter((score) => {
            return score.username[0] === userData.username;
        });

        setUserScores(filteredScores);
    };

    const saveOrUpdateScore = async (id, score) => {
        try {
            const oldScore = userScores.find((score) => {
                return score.lessonNumber[0] == id
            });

            if (oldScore) {
                if (score > oldScore.score) {
                    const data = {
                        score: score,
                    };
    
                    const result = await upadate_score(oldScore._id, data);
                    await fetchScores();
    
                    return result
                };
            } else {
                const data = {
                    score: score,
                    username: userData.username,
                    lessonNumber: id
                };

                const result = await create_score(data);
                await fetchScores();

                return result
            };
        } catch (error) {
            console.log("createNewScore: ", error);
        };
    };


    useEffect(() => {
        if (!userData && userData !== null) {
            getUserSession()
        };

        if (!userScores && userData) {
            fetchScores()
        };
    }, [userData]);


    return (
        <UserContex.Provider value={{
            userData,
            auth,
            userScores,

            setUserData,
            setAuth,
            setUserScores,

            fetchScores,
            saveOrUpdateScore
        }}>
            {children}
        </UserContex.Provider>
    )
}