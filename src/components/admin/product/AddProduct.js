import React, {useState} from 'react'


function AddProduct() {
    const[name, setName] = useState(''); 
    const[price, setPrice] = useState('');
    const[currency, setCurrency] = useState('');   
    const[img, setImg] = useState('');
    const[description, setDescription] = useState('');
    const[quantity, setQuantity] = useState('');

    const[error,setError]=useState(false)
   
    const addProduct =async() =>{
        if (!name || !currency  || !img || !description || !price || !quantity   ){
           setError(true);
            return false    
        }

      console.warn( name, price, currency, img, description,  quantity,  );
    
      let result =await fetch('http://localhost:3001/products/add',{
        method:'POST',
        body: JSON.stringify({  name, price, currency, img, description, quantity }),
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': localStorage.getItem('token')
        },
    });
    result = await  result.json();
    console.warn(result);
    }
    return (
        <div className='product'>
            <h1>AddProduct</h1>
            <input type='text' placeholder='Enter product name' className='inputBox'
           value={name} onChange={(e)=>setName(e.target.value)} 
            /> 
             {error && !name && <span className='invalid-input'> Enter valid name</span>}
             <input type='text' placeholder='Enter product price' className='inputBox'
            value={price} onChange={(e)=>setPrice(e.target.value)}
            /> 
             {error && !price && <span className='invalid-input'> Enter valid price</span>}
             <input type='text' placeholder='Enter product currency' className='inputBox'
             value={currency}   onChange={(e)=>setCurrency(e.target.value)}
             />
              {error && !currency && <span className='invalid-input'> Enter valid currency</span>}
             <input type='text' placeholder='Enter product img' className='inputBox'
            value={img}   onChange={(e)=>setImg(e.target.value)}
            />
             {error && !img && <span className='invalid-input'> Enter valid img</span>}
             <input type='text' placeholder='Enter product description' className='inputBox'
            value={description}   onChange={(e)=>setDescription(e.target.value)}
            />
             {error && !description && <span className='invalid-input'> Enter valid description</span>}
            <input type='text' placeholder='Enter product quantity' className='inputBox'
            value={quantity} onChange={(e)=>setQuantity(e.target.value)}
            />
             {error && !quantity && <span className='invalid-input'> Enter valid quantity</span>}
             {/* <input type='text' placeholder='Enter product categoryId' className='inputBox'
            value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}
            />
             {error && !categoryId && <span className='invalid-input'> Enter valid category</span>}
             */}
            <button onClick={addProduct} className='appButton'>Add Product</button>       
    
        </div>
    )
}

export default AddProduct
