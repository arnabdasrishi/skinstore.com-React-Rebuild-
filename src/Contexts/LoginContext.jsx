import { createContext, useState } from "react";

export const LoginData = createContext();


export const LoginContext = ({children}) => {
    const [loginContext, setLoginContext] = useState("")

    const handleUser = (username) => {
        setLoginContext(username);
    }

  return (
    <LoginData.Provider value={{loginContext, handleUser}}>
        {children}
    </LoginData.Provider>
  )
}
