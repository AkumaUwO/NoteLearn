'use client'

import { 
    createContext,  
    useState, 
    useEffect 
} from "react";


export const UserContex = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [auth, setAuth] = useState();

    return (
        <UserContex.Provider value={{
            userData,
            auth,

            setUserData,
            setAuth
        }}>
            {children}
        </UserContex.Provider>
    )
}