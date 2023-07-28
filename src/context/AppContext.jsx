/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "./utils";


export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    
    useEffect(()=> {
        const userOnEffect = getLocalStorage();
        if(userOnEffect){
            setUser(userOnEffect);
            console.log("usuario logado", userOnEffect);
        }
    }, [])

    async function authenticate(email, password){
        Api.post('/session', { email, password })
        .then((response) => {
            if(!response.data.error === true){
                toast(response.data.message);
            }
            const email = response.data.user.email;
            const payload = { token: response.data.token, email };
            setUser(payload);

            setLocalStorage(payload);

            window.location.href = "/perfil"
        }).catch(() => {
            console.log("Error: App erro no post session");
        })
    }

    function logout(){
        setUser(null);
        setLocalStorage(null);

    }

    return (

        <AppContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AppContext.Provider>
    )
}