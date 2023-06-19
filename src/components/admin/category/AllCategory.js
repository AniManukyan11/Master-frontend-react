import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function AllCategory() {
    const [data, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        getCategories();
    }, [refresh]);

    const getCategories = async () => {
        let result = await fetch('http://localhost:3001/categories');
        result = await result.json();
        setCategories(result);
    }
  
    const deleteCategories = async (id)=>{
        console.warn(id);
        let result = await fetch(`http://localhost:3001/categories/delete/${id}`,{
            method: 'DELETE',
            body: JSON.stringify({  }),
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        result = await result.json();
        if(result){
           navigate('/')
          
        }
       setRefresh(!refresh)
    }
     

    return (
        <div className='product-list'>
            <h1>Category List</h1>
            <tr>
                <td>S. No</td>
                <td>Name</td>
                <td>DEL. UP.</td>


            </tr>
            {
                data.map((item,index)=>
                <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                
                <td>
                <button onClick={() => deleteCategories(item.id)}>
                                <svg  className='delete'  xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 110.61 122.88"><path fill="currentColor" d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"/></svg>                           
                            </button>
                            <Link to={'/admin/updateCategory/' + item.id}> <svg className='update' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 121.48 122.88"  ><g><path  fill="currentColor" d="M96.84,2.22l22.42,22.42c2.96,2.96,2.96,7.8,0,10.76l-12.4,12.4L73.68,14.62l12.4-12.4 C89.04-0.74,93.88-0.74,96.84,2.22L96.84,2.22z M70.18,52.19L70.18,52.19l0,0.01c0.92,0.92,1.38,2.14,1.38,3.34 c0,1.2-0.46,2.41-1.38,3.34v0.01l-0.01,0.01L40.09,88.99l0,0h-0.01c-0.26,0.26-0.55,0.48-0.84,0.67h-0.01 c-0.3,0.19-0.61,0.34-0.93,0.45c-1.66,0.58-3.59,0.2-4.91-1.12h-0.01l0,0v-0.01c-0.26-0.26-0.48-0.55-0.67-0.84v-0.01 c-0.19-0.3-0.34-0.61-0.45-0.93c-0.58-1.66-0.2-3.59,1.11-4.91v-0.01l30.09-30.09l0,0h0.01c0.92-0.92,2.14-1.38,3.34-1.38 c1.2,0,2.41,0.46,3.34,1.38L70.18,52.19L70.18,52.19L70.18,52.19z M45.48,109.11c-8.98,2.78-17.95,5.55-26.93,8.33 C-2.55,123.97-2.46,128.32,3.3,108l9.07-32v0l-0.03-0.03L67.4,20.9l33.18,33.18l-55.07,55.07L45.48,109.11L45.48,109.11z M18.03,81.66l21.79,21.79c-5.9,1.82-11.8,3.64-17.69,5.45c-13.86,4.27-13.8,7.13-10.03-6.22L18.03,81.66L18.03,81.66z"/></g></svg></Link>
                    </td>

            </tr>
                )
            }
            
        </div>
    )
}

export default AllCategory