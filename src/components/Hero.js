import {HeroDummyMedia } from "../dummy-data/HeroDummy";
import {useState, useEffect} from "react"
import { useContext } from "react"
import { themeContextObject } from "../contexts/ThemeContext"

const Hero = ()=>{
// state for current display slide of carousel
const [currentDisplay, setCurrentDisplay] = useState(0)

//theme context
const {theme} = useContext(themeContextObject)

//useEffect to change carousel with time
useEffect(
()=>{
// change current slide for carousel
const changeDisplay = (array)=>{
if(currentDisplay < array.length-1){
    setCurrentDisplay((prevDisplay)=> prevDisplay + 1)
}else{
    setCurrentDisplay(0)
}
}

// create interval for carousel timeout
const timeInterval = setInterval(()=> changeDisplay(HeroDummyMedia), 7000);

// cleanup interval
return ()=>  clearInterval(timeInterval)

},   [currentDisplay]

)

// function to select which ite to display based on classNames
const selectDisplay = (className, index)=>{
if(index === currentDisplay ){
    return className
} 
return "empty"
}

// siaplay images and videos optionally
const displayCarousel = (array)=>{
const carousel =  array.map(
(element, i)=>{
if(element.type === "image"){
    return(
    <div className={selectDisplay("img-container", i)} key={i}>
    <img src = {element.url}  alt = ""/>  
    <div className="img-video-tag">
    <h2>  {element.info}   </h2>    </div>
    </div>
    )   
 } 
        
else{
/* video type */ 
    return(
    <div key={i} className= {selectDisplay("video-container", i)}>
    <video src={element.url} autoPlay="autoPlay"  muted loop />
    <div className="img-video-tag">
    <h2>   {element.info}  </h2> 
    </div>
    </div>
    )

}

}
)

return carousel
}

return(
<section className={`hero-section ${theme}`}>
{ 
displayCarousel(HeroDummyMedia)
}
</section>
)

}
export default Hero