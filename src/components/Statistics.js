import { useContext, useState} from "react"
import { themeContextObject } from "../contexts/ThemeContext"
import PlayerCard from "./PlayerCard"
import {HeroDummyPlayers} from "../dummy-data/HeroDummy"
import {Link} from "react-router-dom"

const Statistics = ()=>{
// theme context
const {theme} = useContext(themeContextObject)

// state for slider
const [playerSlide, setPlayerSlide] = useState(0)

//  slider forward
const nextPlayer = (array)=>{
playerSlide === (array.length)-1 ? setPlayerSlide(0) : setPlayerSlide((prevState)=> prevState + 1)
}

// slider backward
const prevPlayer = (array)=>{
playerSlide === 0 ? setPlayerSlide(array.length-1) : setPlayerSlide((prevState)=> prevState -1)
}

// display player card 
const displayPlayerCard = (array)=>{
return array.map(
(player,i)=>{
const sliderObject = {
    playerIndex : i,
    prevPlayer: ()=> prevPlayer(HeroDummyPlayers),
    nextPlayer : ()=> nextPlayer(HeroDummyPlayers) ,
    playerSlide
} 

return(
    <PlayerCard
    playerInfo = {player} 
    sliderObject = {sliderObject}
    key = {i}/>
)

}

)
}

return(
<section className={`statistics-section ${theme}`}>
<div className="player-stats-area">
    {/* Centered div */}
    <div className="player-card">
    <div className="player-bio"> 
    {
        displayPlayerCard(HeroDummyPlayers)
    }
     </div>
    
    <div className="stat-action-container">  
    <h2>SCORE SETTLE</h2>
    <p className="stat-quote">
        Score Settle brings you the most recent  statistics on players. 
        Top players statistics from across leagues like the premier league,
         ligue 1, la liga,serie-a, bundesliga and many others.
        Back your arguments with facts and figures.
        Dive In Now! 
    </p>

    <Link  to="/player-comparison" className={`stat-action button ${theme}-btn`}> 
    COMPARE STATS
    </Link>
    </div>

    </div> {/* center div ends */}
</div>

</section>
)
}
export default Statistics