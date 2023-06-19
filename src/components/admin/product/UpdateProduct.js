import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function UpdateProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    // const [categoryId, setCategoryId] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    // const[error,setError]=useState(false)


    useEffect(() => {
        getOneProduct();
    }, [])
    const getOneProduct = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:3001/products/getOne/${params.id}`);
       
        result = await result.json();
        console.log(result)
        setName(result.name);
        setPrice(result.price);
        setCurrency(result.currency);
        setImg(result.img);
        setDescription(result.description);
        setQuantity(result.quantity);
        // setCategoryId(result.categoryId);
    }

    const updateProduct = async () => {
        console.log(name, img, price, quantity)
        let result = await fetch(`http://localhost:3001/products/update/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({  name, price, currency, img, description,  quantity }),
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': localStorage.getItem('token')
            },
        });
        result = await result.json();
      if(result){
         navigate('/admin/allProduct')
        
      }
           
    }
    return (
        <div className='product'>
            <h1>UpdateProduct</h1>
            <input type='text' placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => setName(e.target.value)}
            />
             <input type='text' placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => setPrice(e.target.value)}
            /> 
            <input type='text' placeholder='Enter product currency' className='inputBox'
                value={currency} onChange={(e) => setCurrency(e.target.value)}
            />
            <input type='text' placeholder='Enter product img' className='inputBox'
                value={img} onChange={(e) => setImg(e.target.value)}
            />

            <input type='text' placeholder='Enter product description' className='inputBox'
                value={description} onChange={(e) => setDescription(e.target.value)}
            />

            <input type='text' placeholder='Enter product quantity' className='inputBox'
                value={quantity} onChange={(e) => setQuantity(e.target.value)}
            />
             {/* <input type='text' placeholder='Enter product category' className='inputBox'
                value={categoryId} onChange={(e) => setQuantity(e.target.value)}
            /> */}
    

            <button onClick={updateProduct} className='appButton'>Update Product</button>

        </div>
    )
    
}

export default UpdateProduct;
