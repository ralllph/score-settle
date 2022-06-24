import { authContextObject } from "../contexts/AuthContext"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({children})=>{
// user context to check logged in status
const {user} = useContext(authContextObject)

// navigate user back
const navigate = useNavigate()

useEffect(
()=>{
    if(!user){
        navigate("/login")
    }
},
// eslint-disable-next-line   
[user]
)

return user ? children : null
}

export default  ProtectedRoute