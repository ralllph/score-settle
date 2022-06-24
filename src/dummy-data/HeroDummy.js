import managers from "../assets/images/managers.jpg"
import players from "../assets/images/players.jpg"
import general from "../assets/images/general.jpg"
import soccer from "../assets/videos/soccer.mp4"
import neymar from "../assets/images/neymar.webp"
import salah from "../assets/images/salah.jpg"
import havertz from "../assets/images/havertz.webp"

export const HeroDummyMedia = 
[
{
    url: general,
    type:"image",
    info: "SETTLE THAT ARGUMENT NOW!"
},
{
    url: players,
    type:"image",
    info: "COMPARE PLAYER STATS"
},
{
    url:soccer,
    type: "video",
    info: "WHO IS THE G.O.A.T?"
},

{
    url:managers, 
    type:"image",
    info: "MBAPPE OR HAALAND?"
}

]

export const HeroDummyPlayers = 
[
{
    firstName: "Mo",
    surname: "Salah",
    url: salah,
    number: "11",
    appearances: "35",
    goals: "23",
    assists:"13",
    passAccuracy: "79.9"
},
{
    firstName: "Neymar",
    surname: "Jr",
    url: neymar,
    number: "11",
    appearances: "22",
    goals: "13",
    assists:"6",
    passAccuracy: "82"
},
{
    firstName: "Kai",
    surname:" Havertz",
    url: havertz,
    number: "29",
    appearances: "29",
    goals: "8",
    assists:"3",
    passAccuracy: "81.3"
}
]