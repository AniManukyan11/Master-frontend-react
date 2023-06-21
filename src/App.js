import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Login from './components/frontend/SignUp/Login';
import Register from './components/frontend/SignUp/Register';
import AddProduct from './components/admin/product/AddProduct';
import ProductList from './components/admin/product/ProductList';
import AddCategory from './components/admin/category/AddCategory';
import AllCategory from './components/admin/category/AllCategory';
import Home from './components/frontend/home/Home';
import UpdateCategory from './components/admin/category/UpdateCategory';
import UpdateProduct from './components/admin/product/UpdateProduct';
import Users from './components/admin/Users';
import Footer from './layouts/frontend/Footer';
// import Header from './components/frontend/header/Header';
import PrivateeComponent from './components/frontend/SignUp/PrivateComponent'


function App() {
  

//  const token = localStorage.getItem('token')
//  console.log(token)
//  const role=token? Boolean(jwt_decode(token).role):false

//  if (token){
//     const decoded = jwt_decode(token)
//  const role = Boolean( decoded.role)  
//  if (!role){
//     window.location.href='/'
//  }
//  }



  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
      
        <Routes>
          
          <Route element={<MasterLayout />}>
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/profile' element={<Profile />} />
            <Route path='/admin/addProduct' element={<AddProduct />} />
            <Route path='/admin/allProduct' element={<ProductList />} />
            <Route path='/admin/updateProduct/:id' element={<UpdateProduct />} />
            <Route path='/admin/category' element={<AddCategory />} />
            <Route path='/admin/allCategory' element={<AllCategory />} />
            <Route path='/admin/updateCategory/:id' element={<UpdateCategory />} />
            <Route path='/admin/users' element={<Users/>}/>
          </Route>
      
          {/* <Route element= {<PrivateeComponent/>}> */}
          <Route path='/' element={<Home />} />
          <Route path='/logout' element={<h1>Logout Component</h1>}/>
          {/* </Route> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
