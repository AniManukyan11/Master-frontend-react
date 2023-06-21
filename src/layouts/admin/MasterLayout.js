import React from 'react';
// import Navbar from './Navbar';
import Sidebar from './Sidebar';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Outlet,Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

//  import jwt_decode from "jwt-decode";

//  const token = localStorage.getItem('token')
//  console.log(token)
//  if (token){
//     const decoded = jwt_decode(token)
//  const role = Boolean( decoded.role)  
//  if (!role){
//     window.location.href='/'
//  }
//  }
 const token = localStorage.getItem('token')
 console.log(token)
 const role=token? Boolean(jwt_decode(token).role):false
    


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
                    {role ?<Outlet/>:<Navigate to='/'/>}             
                    </main>  
                    </div>
                  
            </div>
        // </div>
    );
}

export default MasterLayout