import React from 'react'
import { createContext, useState , useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }
  return (
    <AuthContext.Provider  value={{user,login ,logout}}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}