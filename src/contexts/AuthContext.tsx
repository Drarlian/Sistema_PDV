import React, { createContext, useEffect, useState } from "react";
import { User, Props } from "../@types/User";
import { useApi } from "../hooks/useApi";
import { useStorage } from "../hooks/useStorage";


export const AuthContext = createContext({} as Props)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
    const { logar } = useApi();
    const {adicionarItem, removerItem, pegarItem} = useStorage();
    //      logar           logout

    async function fazerLogin(login: string, senha: string){
        const data = await logar(login, senha);

        if (data.user){
            setUser(data.user);
            adicionarItem('usuario-pdv', data.user);
            return data.user
        }
        return data.user
    }

    function fazerLogout(){
        setUser(null);
        removerItem('usuario-pdv');
    }

    function definirUsuario(){
        const usuario = pegarItem('usuario-pdv');
        if (usuario){
            setUser(usuario);
        } else {
            return null
        }
    }

    useEffect(() => {
        definirUsuario();
    }, [])

    return <AuthContext.Provider value={{user, fazerLogin, fazerLogout}}>{children}</AuthContext.Provider>
}