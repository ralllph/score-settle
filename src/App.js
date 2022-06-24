import "./styling/styles.css"
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import PlayerComparison from "./pages/PlayerComparison";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars,  faMoon, faRectangleXmark, faSun } from '@fortawesome/free-solid-svg-icons'
//font awesome library 
library.add(fab, faBars, faSun,faMoon,faRectangleXmark)

const App = () =>{
return (
<>
<Routes>
  <Route path="/" element = { <Home />}  />
  <Route  path="/login" element={<Login />}  />
  <Route path="/signup" element={<Signup />} />
  <Route path="/player-comparison" element = {<ProtectedRoute> <PlayerComparison/> </ProtectedRoute>} />
</Routes>
</>
)
}

export default App
