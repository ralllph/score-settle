import { useContext } from "react"
import Header from "../components/Header"
import Form from "../components/Form"
import { authContextObject } from "../contexts/AuthContext"

const Login = ()=>{
// context values
const {login} =  useContext(authContextObject)
return(
<>  
<Header />
<Form  formType = "LOGIN"  formAction = {login} />
</>
)
}

export default Login