import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/reducer"
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
<Provider store={store}>
<App/>
</Provider>
</BrowserRouter>


 
)
