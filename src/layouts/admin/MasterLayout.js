import React from 'react';
// import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from '../frontend/Footer';
import Dashboard from '../../components/admin/Dashboard';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Outlet } from 'react-router-dom';
import AddProduct from '../../components/admin/product/AddProduct';
 import { BrowserRouter as Redieact , Routes, Route  } from 'react-router-dom';


const MasterLayout = () => {
    return (
        // <div id='sb-nav-fixed'>
        // //     <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                 <main>        
                    <Outlet/>              
                    </main>  
                    </div>
                  
            </div>
        // </div>
    );
}

export default MasterLayout