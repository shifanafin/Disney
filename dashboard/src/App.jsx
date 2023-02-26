import Login from "./components/Login"
import {Routes,Route} from "react-router-dom"
import DashboardOn from "./components/DashboardOn"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Trending from "./components/Trending"
import Register from "./components/Register"


function App() {

  return (
<div>
   <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboardon" element={<DashboardOn/>}>
    <Route path="/dashboardon" element={<Home/>}/>
    <Route path="/dashboardon/profile" element={<Profile/>}/>
    <Route path="/dashboardon/trending" element={<Trending/>}/>

    </Route>
 

  </Routes>
   



</div>
  


 
  )
}

export default App
