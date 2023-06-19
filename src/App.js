import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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


function App() {
 


  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home />} />
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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
