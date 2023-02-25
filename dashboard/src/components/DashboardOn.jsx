import React from 'react'
import Sidebar from "./Sidebar"
import { Outlet,useLocation } from 'react-router-dom'


const DashboardOn = () => {
  
  return (
    
    <div>
     <div className="grid lg:grid-cols-4 xl:grid-cols-6 ">
      <Sidebar/>  
     <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8   "  >    
     <Outlet/>
      </main>  
     </div>
    </div>

  )
}

export default DashboardOn
