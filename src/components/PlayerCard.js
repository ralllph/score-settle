const PlayerCard = ({playerInfo, sliderObject})=> {
// get valid player information from props
const {firstName,surname, url,number,appearances,goals,assists,passAccuracy} = playerInfo
const {nextPlayer, playerIndex, prevPlayer, playerSlide} =  sliderObject

// which card is currently being displayed
const isCardDisplayed = ()=>{
return  playerSlide ===  playerIndex ?  " " : "empty"
}

return(
<>
{/* Player Details */}
<div className={`player-details ${isCardDisplayed()}`}>
<div className="player-number-container"><h2 className="player-number">{number}</h2> </div> 
<h2 className="player-name">  {firstName} <span className="player-surname">  {surname}</span> </h2>
</div> {/* player details end*/}

{/* player image slider  */}

<div className={`player-img-container ${isCardDisplayed()}`} >  
<img src={url} alt =""/> 
<div className= "slider-left" onClick= {prevPlayer} >   <button>  {"<"}  </button> </div> 
<div className="slider-right" onClick={nextPlayer}>  <button  > {">"}  </button> </div> 
</div>

{/*  stat figures  */}
<div className={`stat-figures ${isCardDisplayed()}`}>

<div className="stat-figures-item"> 
<h4 className="stat-number">{appearances} </h4>
<span className= "stat-description">Appearances</span>
</div>

<div className="stat-figures-item"> 
<h4 className="stat-number">{goals} </h4>
<span className= "stat-description">Goals</span>
</div>

<div className="stat-figures-item"> 
<h4 className="stat-number">{assists} </h4>
<span className= "stat-description">Assists</span> 
</div>

<div className="stat-figures-item"> 
<h4 className="stat-number">{passAccuracy}  <span className="stat-percentage">%</span></h4>
<span className= "stat-description">Pass Accuracy</span> 
</div>

</div>{/* stat-figures end */}

</>
)   
}

export default PlayerCard