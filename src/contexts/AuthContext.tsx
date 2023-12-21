import React, { createContext, useState } from "react";
import { User, Props } from "../@types/User";
import { useApi } from "../hooks/useApi";


export const AuthContext = createContext({} as Props)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
    const { logar } = useApi();

    async function fazerLogin(login: string, senha: string){
        const data = await logar(login, senha);

        console.log(data);

        if (data.user){
            setUser(data.user);
            return true
        }
        return false
    }

    return <AuthContext.Provider value={{user, fazerLogin}}>{children}</AuthContext.Provider>
}