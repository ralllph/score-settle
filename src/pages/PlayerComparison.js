import {useState, useContext} from "react"
import malePlayer from "../assets/images/malePlayer.jpg"
import CompareModal from "../components/CompareModal"
import Header from "../components/Header"
import { themeContextObject } from "../contexts/ThemeContext"
import Footer from "../components/Footer"

const PlayerComparison = ()=> {
//context for theme
const {theme} = useContext(themeContextObject)

// state values
const [selected, setSelected] = useState("")
const [toggleModal, setToggleModal] = useState(false)
const [firstPlayerPhoto, setFirstPlayerPhoto] = useState(malePlayer)
const [secondPlayerPhoto, setSecondPlayerPhoto] = useState(malePlayer)
const [error, setError] = useState("")
const [firstPlayerRequest, setFirstPlayerRequest]  = useState(
{
name:"",
club: "",
season:"",
response:[]
}
)

const [secondPlayerRequest, setSecondPlayerRequest]    = useState(
{
name:"",
club: "",
season:"",
response:[]
}
)

// toggle modal
const handleToggleModal = ()=>{
setToggleModal(!toggleModal)
setError("")
setFirstPlayerRequest(
    (prevState)=> ({...prevState, name:"",club:"", season:""})
)
setSecondPlayerRequest(
    (prevState)=> ({...prevState, name:"",club:"", season:""})
)
}

// handle first mannequin click
const handleFirstManClick = ()=>{
setSelected("firstPlayer")
handleToggleModal()
}

// handle second mannequin click
const handleSecondManClick = ()=>{
setSelected("secondPlayer")
handleToggleModal()
}

const dummy = [
"Appearances",
"Goals",
"Assists",
"Key Passes",
"Yellow cards",
"Red cards"
]

// display player stats
const displayPlayerStats =(playerResponse)=>{
return(
    <>
    <h3> {playerResponse.games.appearences ? playerResponse.games.appearences : 0}  </h3>
    <h3>{playerResponse.goals.total  ?  playerResponse.goals.total : 0}</h3>
    <h3>{playerResponse.goals.assists ? playerResponse.goals.assists : 0}</h3>
    <h3>{playerResponse.passes.key ? playerResponse.passes.key : 0 }</h3>
    <h3>  {playerResponse.cards.yellow ?  playerResponse.cards.yellow : 0}  </h3>
    <h3> {playerResponse.cards.red ? playerResponse.cards.red : 0} </h3> 
     </> 
)
}

//props object
const playerProps =
{
id : selected,
error,
firstPlayerRequest,
secondPlayerRequest,
setFirstPlayerRequest,
setSecondPlayerRequest,
modal:toggleModal,
toggleModal :handleToggleModal,
setError,
setFirstPlayerPhoto,
setSecondPlayerPhoto
}

return(
<>
<Header />

<section className={`comparison ${theme}  `}>
    <div className="compare-area">
    <div className="mannequin-container" onClick={handleFirstManClick}  > 
    <img  src = {firstPlayerPhoto} alt= ""/>
    <div className="addPlayerButton" ><span className="plus-sign"> +</span></div>
    </div>
    <p className="promptAddPlayer">Tap mannequin to add player </p>
    </div>

    <div className="compare-area">
    <div className="mannequin-container" onClick={handleSecondManClick} >
    <img  src= {secondPlayerPhoto} alt=""/>
    <div className="addPlayerButton"><span className={`plus-sign `}> +</span>
    </div>

    </div>
    <p className="promptAddPlayer">Tap mannequin to add player</p>
    </div>
</section>

<CompareModal  playerProps = {playerProps} />

<section className={`table ${theme}`}>
    <div className="table-stats-container">
        <div className="player1-stats">
        {firstPlayerRequest.response.length!==0 &&
        displayPlayerStats(firstPlayerRequest.response)
        }
        </div>

        <div className="table-stats-description">{
        dummy.map(
         (stats,i)=>{
             return(
            <h3 key={i}>{stats}</h3>
            )
        }
        )
        }
        </div>

        <div className="player2-stats">
        {secondPlayerRequest.response.length!==0 &&
        displayPlayerStats(secondPlayerRequest.response)
        }
        </div>

    </div>
</section>

<Footer />
</>

)
}

export default PlayerComparison