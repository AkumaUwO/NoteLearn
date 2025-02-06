'use client'

import { 
    createContext,  
    useState, 
    useEffect 
} from "react";

import { get_UserSocres, create_score } from "@/api/user.api";

export const UserContex = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [auth, setAuth] = useState();

    const [userScores, setUserScores] = useState();

    const fetchScores = async () => {
        if (!userData) return;

        const fetchedScores = await get_UserSocres();

        const filteredScores = fetchedScores.scores.filter((score) => {
            return score.username[0] === userData.username;
        });

        console.log(filteredScores)
        
        setUserScores(filteredScores);
    };

    

    const createNewScore = async (id, username, score) => {
  
        const oldScore = userScores.some((score) => {
            return score.lessonNumber[0] == id
        });

        if (oldScore) {
            try {
                
            
            } catch (error) {
                console.log("createNewScore: ", error);
            }
        } else {
            try {
                const data = {
                    score: score,
                    username: username,
                    lessonNumber: id
                };
            
                const result = await create_score(data);
                await fetchScores();
    
                return result
            } catch (error) {
                console.log("createNewScore: ", error);
            };
        }; 
    };


    useEffect(() => {
        if(!userScores && userData) {
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
            createNewScore
        }}>
            {children}
        </UserContex.Provider>
    )
}