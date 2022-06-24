import Header from "../components/Header"
import Form from "../components/Form"
import {useContext} from "react"
import { authContextObject } from "../contexts/AuthContext"

const Signup =()=>{
// create user with email and password 
const {createUser}  = useContext(authContextObject)

return(
    <>
    <Header />
    <Form formType = "SIGN UP"  formAction = { createUser}/>
    </>
)

}

export default Signup