import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//import Components from single files
import {Home,About,Product,Cart} from './Pages/index'
//import simply
import {Error} from './Pages/Error'
import {NavLinks} from './NavLink/NavLink' 


export const Routers = () => {
    return (
        <div>
            <Router>
            <NavLinks/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="product/:id" element={<Cart/>}/>
                   
                    <Route path="*" element={<Error/>}/>

                </Routes>
            </Router>
        </div>
    )
}
