import React, { useState,useRef,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import DashboardOn from './DashboardOn'
import cind from "./cind.jpg"
import cover from "./Cover.webp"

import { BsLockFill } from 'react-icons/bs'


const Login = () => {

const [formData,setFormData]= useState({
  userName:"",
  Password:"",

})


const handleChange = (e) => {

  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value })

}
const navigate = useNavigate();

const clickHandler = ()=>{
  if(formData.Password==="123" && formData.userName==="shif" )
  {
    navigate("/dashboardon")
  }
  else{
    console.log("error")
  }
}



  return (
    <div>
        <section className=' min-h-screen flex items-center justify-center  '>
            {/*Login Container*/}
            <div className='bg-blue-100 shadow-lg max-w-3xl flex rounded-2xl p-5' >
            {/*Login Form*/}
            <div className='sm:w-1/2 px-16'>
                <h2 className='font-bold text-2xl '>Login</h2>
                <form 
                
                  className='flex flex-col gap-4'>
                    <input 
                    className='p-2 mt-8 rounded-xl border'
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder='Enter Name'
                    required
                    />
                    <input
                      className='p-2 mt-8 rounded-xl border'
                    type="Password"
                    name="Password"
                    value={formData.Password}
                    placeholder='Password'
                    onChange={handleChange}
                    required
                    />
                    <h1>{formData.Password}</h1>
                <button
                onClick={clickHandler}
                 className='bg-blue-300 p-3 rounded-3xl mt-5 hover:text-white font-bold font-serif'>
                    click Me       
                    </button>
             
                    <NavLink to="/" className='flex items-center justify-center'>
                      Register

                    </NavLink>
                </form>
            </div>
            {/*Login Image*/}
            <div className='w-1/2 sm:block hidden '>
                <img className='rounded-2xl' src={cover} alt="" />
            </div>
            </div>
        </section> 
    </div>
  )
}

export default Login
