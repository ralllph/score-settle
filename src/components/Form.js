import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

const Form  = (props)=>{
// manage form state
const [formData, setFormData] = useState(
{
    email: "",
    password: "",
    error: ""
}
)

//handle input change
const handleChange =(e)=>{
const {name, value} = e.target
setFormData(
(prevState)=> ({...prevState, [name]: value})
)
}

// verify form details from firebase server
const verifyDetails = async()=>{

try{
await props.formAction(formData.email, formData.password)
navigate("/") 
}
catch(error){     
setFormData(
(prevState) =>   (  {...prevState ,  error: "invalid details"}  )   
)
}

}

// use navigate hook
const navigate = useNavigate()
//handle form Submission
const handleFormSubmit = (e)=>{
e.preventDefault()

setFormData(
(prevState)=>({...prevState, error:""})
)

if(!formData.email){
setFormData(
(prevState)=> ({...prevState, error:"please enter email"})
)
return
}

if(!formData.password){
setFormData(
 (prevState)=> ({...prevState, error:"please enter password"})
)
return
}

if(formData.password.split(" ").join().length<6){
setFormData(
(prevState)=> ({...prevState, error:"password must be at least 6 characters"})
)
return
}

verifyDetails()

}

return(
<div className={`form-container`}>

{/*   Form body    */}
<form onSubmit={handleFormSubmit}> 

<div className="input-container">  
<label htmlFor = "email"  >Email:</label>
<input type="email" placeholder="🖂 Enter e-mail.." 
className={`$theme`} 
id= "email" onChange={handleChange} 
value={formData.email} 
name= "email"
/>
</div>

<div className="input-container"> 
<label htmlFor="password">Password:</label>
<input type="password" 
placeholder = "🔑 Enter password.."  
id = "password"
onChange={handleChange}
value={formData.password} 
name= "password"
/>
</div>

{/* link users to alternate page  based on sign in status */}
<h5>
{props.formType === "SIGN UP" ? "Already signed up?" : "Don't have an account?"}    
{props.formType=== "SIGN UP" ? <Link className="formLink" to="/login">login</Link> :
<Link className= "formLink" to="/signup">signup</Link> }
</h5>
<p className="formError">{formData.error}</p>
<button className="" onClick={handleFormSubmit} > {props.formType}</button>

</form>

</div>
)

}

export default Form