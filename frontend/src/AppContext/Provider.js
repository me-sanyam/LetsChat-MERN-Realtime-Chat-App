import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Appcontext = createContext();

export default function ContextProvider({ children }) {
    const [user, setuser] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        const userinfo = JSON.parse(localStorage.getItem('UserInfo'))
        setuser(userinfo);
        if (userinfo === null) {
            navigate("/");
        }

    }, [navigate]);

    return (
        <Appcontext.Provider
            value={{
                user,
                setuser
            }}
        >
            {children}
        </Appcontext.Provider >
    )
}

export const UseAppStates = () => {
    return useContext(Appcontext);
}
