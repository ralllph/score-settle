import { useEffect,useState, useContext} from "react"
import { themeContextObject } from "../contexts/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CompareModal = ({playerProps})=>{
// theme context 
const {theme}  = useContext(themeContextObject)

// destructure values from props
const {id,error, setError, 
firstPlayerRequest, 
setFirstPlayerRequest,
secondPlayerRequest,
setSecondPlayerRequest,
setFirstPlayerPhoto,
setSecondPlayerPhoto,
modal , toggleModal}  =  playerProps

// keep track of when user submission
const [isSubmitted,setIsSubmitted] = useState(false)

// abort controller to clean up api calls
const controller = new AbortController()

// make request based on for submission 
useEffect(
()=>{    
//make request baed on player id
if(id === "firstPlayer"){
    if(!error){
    getPlayer(firstPlayerRequest)
    }
}

if(id==="secondPlayer"){
    if(!error){ 
    getPlayer(secondPlayerRequest)
    }
}

},
 // eslint-disable-next-line   
[isSubmitted]
)

//return api string based on input
const apiString = (url, player)=>{
return `${url}?search=${player.name}&team=${player.club}&season=${player.season} `
}

// make Api call to get players
const getPlayer = async(player)=>{
try {  
const response = await fetch(apiString("https://api-football-v1.p.rapidapi.com/v3/players",player),{
headers: {
"x-rapidapi-host": "api-football-v1.p.rapidapi.com/v3/",
"x-rapidapi-key": process.env.REACT_APP_RADIP_API_KEY
},
signal: controller.signal
})

const data  = await response.json()

if(data.results!==0){
    if(id === "firstPlayer"){
    setFirstPlayerRequest(
    (prevState)=> ({...prevState, response:data.response[0].statistics[0 ]   })
    )
    setFirstPlayerPhoto(
    data.response[0].player.photo
    )
    }

    if(id === "secondPlayer"){
    setSecondPlayerRequest(
    (prevState)=> ({...prevState, response:data.response[0].statistics[0]   })
    )
    setSecondPlayerPhoto(
    data.response[0].player.photo
    )
    }
}else(
setError("No match found")
)

}catch(err){
    setError("Unable to connect")
}
}

const handleFormSubmit = (e)=>{
e.preventDefault()
setError("")

if(id === "firstPlayer"){
    if(!firstPlayerRequest.name ){
    setError("please Enter player name")
    }
    else if(!firstPlayerRequest.club){
    setError("please Enter club")
    }   
    else if(!firstPlayerRequest.season){
    setError("please Enter season")
    }  
    else if(!firstPlayerRequest.season || firstPlayerRequest.season < 2000 || firstPlayerRequest.season > new Date().getFullYear()){
    setError("please Enter Valid Season")
    }       
}

if(id==="secondPlayer"){
    if(!secondPlayerRequest.name ){
        setError("please Enter player name")
    }
    else if(!secondPlayerRequest.club){
        setError("please Enter club")
    } 
    else if(!secondPlayerRequest.season || secondPlayerRequest.season < 2000 || secondPlayerRequest.season > new Date().getFullYear()){
        setError("please Enter Valid Season")
    } 
}

// submission to alert useEffect
setIsSubmitted((prevState)=> !prevState)
}

const handleChange = (e)=>{
const {name, value} = e.target 

if(id === "firstPlayer"){
setFirstPlayerRequest(
(prevState)=> ({...prevState, [name]:value})
)
}
else if(id === "secondPlayer"){
setSecondPlayerRequest(
(prevState)=> ({...prevState, [name]:value})
)
}

}

return(
<div className={ modal ? `compare-modal ${theme}-btn`: "empty"}> 

{/* Team options */ }
<form onSubmit={handleFormSubmit} >  

<label> PLayer Name: <input placeholder="Enter player name" onChange={handleChange} name="name"
value={id==="firstPlayer"?firstPlayerRequest.name:secondPlayerRequest.name}/> 
</label>

<div> 
<label > Player Club: 
<select  onChange={handleChange} name= "club"  value ={
id === "firstPlayer"? firstPlayerRequest.club : secondPlayerRequest.club
}>
<option value="">select club</option>
<option value= "33" >Manchester United</option>
<option value= "50" >Manchester City</option>
<option value= "49" >Chelsea</option>
<option value= "40" >Liverpool</option>
<option value= "47" >Tottenham Hotspur</option>
<option value= "165" >Dortmund</option>
<option value= "85" >Paris Saint Germain</option>
<option value= "530" >Atletico Madrid</option>
<option value= "529" >Barcelona</option>
<option value= "541" >Real Madrid</option>
<option value= "157" >Bayern Munich</option>
</select>
</label> 
</div>

<label> Season: <input placeholder="Enter season" onChange={handleChange} name="season"
value={id==="firstPlayer"?firstPlayerRequest.season:secondPlayerRequest.season} type="number"/> 
</label> 

<p className={error?"formError":"empty"}>{error}</p>
<button onSubmit={handleFormSubmit}  className={`${theme} button`}> SUBMIT</button>

</form>

<FontAwesomeIcon icon="rectangle-xmark" className="i sidebar-icon" onClick={toggleModal} />
</div>
)
}

export default CompareModal