import brawl from "../assets/images/brawl.jpg"
import Sidebar from "./Sidebar"
import { sidebarContextObject } from "../contexts/SidebarContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { themeContextObject } from "../contexts/ThemeContext"
import { authContextObject } from "../contexts/AuthContext"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ()=>{
// context values
const {toggleSidebar} = useContext(sidebarContextObject)
const {theme, toggleTheme} = useContext(themeContextObject)
const {user,logout} = useContext(authContextObject)

// navigate context
const navigate = useNavigate()

// display icon based on theme
const themeModeIcon = (theme)=>{
return theme === "dark" ?   <FontAwesomeIcon icon="moon" onClick={toggleTheme} title="dark mode" className="i"/> : 
<FontAwesomeIcon icon="sun" className="i light-mode-icon" onClick={toggleTheme} title="light mode" />
}

// display login or logout function
const isLoggedIn = ()=>{
if(user &&  Object.keys(user) !== 0 ) {
    return  <li className="nav-list"> <Link to = "/" onClick={handleLogout}>LOGOUT</Link> </li> 
}else{
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
   alert("unable to logout")
}
}

return(
<header className={`header-section ${theme}`}>

{/* div containing logo and name  */}
<div className="header-logo-section"> 
<div className="header-logo-container">
    <Link to="/">
        <img className="header-logo-image" src={brawl}  alt="score settle icon"/>
    </Link>
</div>
<h3 className="header-title" > <Link to="/"> Score Settle</Link></h3>
</div>

{/* div containing icons */ }
<div className="header-icon-section"> 
<ul>
<li> {themeModeIcon(theme)}  </li> 

{ user && Object.keys(user).length !==0   &&  
<li>
<div title={`signed in: ${user.email}`} className="user-signed-in">{user.email[0].toUpperCase()}
</div> 
</li> 
}

<li> <FontAwesomeIcon icon="bars" className="i menu-icon"onClick={toggleSidebar} title="menu icon" />  </li>
</ul> 
</div>

{/* Nav Bar Begins */}
<nav className={`header-nav`}>
<ul className={`header-ul `}>
    <li className="nav-list"> <Link to = "" className="header-icon"> {themeModeIcon(theme)}</Link> </li>

    { user && Object.keys(user).length !==0   &&  
     <li> 
         <div title={`signed in: ${user.email}`} className="user-signed-in">{user.email[0].toUpperCase()}</div> 
    </li> 
      }
      
    <li className="nav-list"> <Link to="/"> HOME</Link> </li>
    <li className="nav-list"> <Link to = "/player-comparison">COMPARISON</Link>  </li>
    <li className="nav-list"> <Link to = "/">NEWS</Link>  </li>
    <li className="nav-list"> <Link  to = "/">ABOUT</Link>  </li>
    {isLoggedIn() }
</ul>
</nav>
{/* Nav Bar Ends*/}

{/* side bar   */}
<Sidebar />
</header>
)
}

export default Header