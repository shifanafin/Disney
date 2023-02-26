import React from 'react'
import axios from 'axios';
import { useState } from 'react';

import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const initialState ={
  msg:"",
  user:'',
  token:"",
  loading:"",
  error:""

}



export const signUpUser = createAsyncThunk("signUpUser",async()=>{
  const [data, setData] = useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get(  'http://localhost:3008/user');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  })
export const signInUser = createAsyncThunk("signInUser",async()=>{
  const [data, setData] = useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get(  'http://localhost:3008/login');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  })



const AuthSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    addToken:(state,action)=>{
      state.token=localStorage.getItem("token")
    },
    addUser:(state,action)=>{
      state.user=localStorage.getItem("user")
    },
    logOut:(state,action)=>{
      state.token = null
      localStorage.clear()
    }

  },
  extraReducers:
  {

    /***SignIn***/
    [signInUser.pending]:(state,action)=>
    {
      state.loading = true
    },
    [signInUser.fulfilled]:(state,{payload:{error,msg,token,user}})=>
    {
      state.loading = false
      if(error){
        state.error = error
      }else{
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg",msg)
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("token",token)

      }
      
    },
    [signInUser.rejected]:(state,action)=>
    {
      state.loading = true
    },
 
                   /* SignUp*/

    [signUpUser.pending]:(state,action)=>
    {
      state.loading = true
    },
    [signUpUser.fulfilled]:(state,{payload:{error,msg}})=>
    {
      state.loading = false
      if(error)
      {
        state.error = error
      }
      else{
        state.msg = msg
      }
    },
    [signUpUser.rejected]:(state,action)=>
    {
      state.loading = true
    },
  
  }
})

export const{addToken,addUser,logOut} = AuthSlice.actions;
export default AuthSlice.reducer

