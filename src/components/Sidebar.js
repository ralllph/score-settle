import { useContext } from "react"
import { sidebarContextObject } from "../contexts/SidebarContext"
import { themeContextObject } from "../contexts/ThemeContext"
import { authContextObject } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

const Sidebar = ()=>{
/* sidebar context values */ 
const {isSidebarOn, toggleSidebar} = useContext(sidebarContextObject)
const {theme} =useContext(themeContextObject)
const {user,logout} = useContext(authContextObject)

// navigate context
const navigate = useNavigate()

// display login or logout function
const isLoggedIn = ()=>{
if(user && Object.keys(user).length !==0){
return  <li className="nav-list"> <Link to = "/" onClick={handleLogout}>LOGOUT</Link> </li> 
}
else{
return  <li className="nav-list"> <Link to = "/login">LOGIN</Link> </li> 
}
}

// perform logout function
const handleLogout = async()=>{
try{
    await logout()
    navigate("/")
}
catch(e){
    alert("unable to ogout,check connection")
}
}

return(
<div className={`sidebar ${theme}`} style= {{width: isSidebarOn}}>
    {/* sidebar icon */}
        <FontAwesomeIcon icon="rectangle-xmark" className="i sidebar-icon" onClick={toggleSidebar} />

    {/* sidebar list */}
        <ul className="sidebar-ul">
        <li className="sidebar-list"> <Link to="/">  HOME</Link> </li>
        <li className="sidebar-list"> <Link to="/player-comparison">  PLAYER COMPARISON</Link> </li>
        <li className="sidebar-list"> <Link to="/">  NEWS</Link> </li>
        <li className="sidebar-list"> <Link to="/">  ABOUT</Link> </li>
        {isLoggedIn() }
    
    </ul>
</div>
)
}

export default Sidebar