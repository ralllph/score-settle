import { useContext } from "react"
import { themeContextObject } from "../contexts/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

const Footer = ()=>{
// theme context
const {theme} = useContext(themeContextObject)

return(
<footer className={`footer-section ${theme}`}>

{/* Footerlink  icons   */}
<div className = {`footer-icons-container ${theme}`}>   

<ul className="footer-icon-links">

<li className="footer-icon-list"> 
<div className={`icon-div ${theme}`}> 
<Link to = "" className="footer-icon" > 
<FontAwesomeIcon icon={["fab", "facebook-f"]} className={`i ${theme}`}/>
</Link>
</div>  
</li>  

<li className="footer-icon-list">
<div className={`icon-div ${theme}`}> 
<Link to = "" className="footer-icon" >
<FontAwesomeIcon icon={["fab", "twitter"]} className={`i ${theme} `}/>
 </Link> 
</div> 
</li>  

<li className="footer-icon-list"> 
<div className={`icon-div ${theme}`}> 
<Link to = "" className="footer-icon" > 
<FontAwesomeIcon icon={["fab", "instagram-square"]} className={`i ${theme}`}/>
</Link> 
</div> 
</li>  

<li className="footer-icon-list">
<div className={`icon-div ${theme}`}> 
<Link to = "" className="footer-icon" >
 <FontAwesomeIcon icon={["fab", "linkedin"]} className={`i ${theme}`} />
</Link>
</div>  
</li>  

</ul>
</div>

{/*  footer-links  */}
<ul className="footer-links">
<li className="footer-link-list"><Link to="/"> Contact us</Link>  </li>
<li className="footer-link-list"><Link to="/"> FAQs</Link>  </li>
<li className="footer-link-list"><Link to="/"> Careers</Link>  </li>
<li className="footer-link-list"><Link to="/"> Privacy Policy</Link>  </li>
<li className="footer-link-list"><Link to="/"> Cookies Policy </Link>  </li>
<li className="footer-link-list"><Link to="/"> NewsLetter</Link>  </li>
<li className="footer-link-list"><Link to="/"> {"Terms & Conditions"}</Link>  </li>
</ul>

<div className="footer-copywrights-section">  
<p className="footer-copywrights" > 
2022 Score Settle. All rights reserved . No part of this site may be reproduced without our written permission
</p>
</div>

</footer>
)
}

export default Footer