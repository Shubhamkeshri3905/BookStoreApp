import React ,{createContext,useContext,useState} from 'react'
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    //local storage se le kr aayege
    const initialAuthUser=localStorage.getItem("Users");
    const[authUser,setAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):undefined)
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
  
}
export const useAuth=()=>useContext(AuthContext)
export default AuthProvider