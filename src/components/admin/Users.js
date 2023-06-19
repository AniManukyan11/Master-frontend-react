import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Users() {
    // const [user, setVerifiedUsers] = useState([]);
    // const [refresh, setRefresh] = useState(true);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     getVerifiedUsers ();
    // }, []);

    // const getAllProducts = async () => {
    //     let result = await fetch('http://localhost:3001/products/getAll');
    //     result = await result.json();
    //     setAllProducts(result);
    // }

    // const deleteProducts = async (id) => {
    //     console.warn(id);
    //     let result = await fetch(`http://localhost:3001/products/delete/${id}`, {
    //         method: 'DELETE',
    //         body: JSON.stringify({}),
    //         headers: {
    //             'Content-Type': 'Application/json',
    //             'Authorization': localStorage.getItem('token')
    //         }
    //     });
    //     result = await result.json();
    //     if (result) {
    //         navigate('/admin/allProduct')

    //     }
    //     setRefresh(!refresh)
    // }

    const [user, setUser] = useState([]);
    useEffect(() => {
    fetch ("http://localhost:3001/users/getAll")
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    }, []);

    return (
        <div className='product-list'>
            <h1>Users </h1>
            <tr>
                <td>ID</td>
                <td>role</td>
                <td>userName</td>
                <td>firstName</td>
                <td>lastName</td>
                <td>email</td>
               
            </tr>
            {
                user.map((item,index)=>
                <tr  key={item.id}>
                <td>{index+1}</td>
                <td>{item.role}</td>
                <td>{item.userName}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
             
                 
            </tr>
                )
            }
            
        </div>
    )
}

export default Users