import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './allProduct.css';


function AllProduct({ addToCart }) {
    const [data, setAllProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
    }, [refresh]);

    const getAllProducts = async () => {
        let result = await fetch('http://localhost:3001/products/getAll');
        result = await result.json();
        setAllProducts(result);
    }
    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const handleIncrement = (item) => {
        const updatedData = data.map((product) => {
            if (product.id === item.id) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setAllProducts(updatedData);
    };

    const handleDecrement = (item) => {
        const updatedData = data.map((product) => {
            if (product.id === item.id && product.quantity > 0) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setAllProducts(updatedData);
    };

    return (
        <div className='productList'>

            {
                data.map((item, index) =>
                    <div key={item.id} className='productItem'>
                        <img src={item.img} alt='' />
                        <h3>{item.name}</h3>

                        <div className='price'>
                            <p>{item.price} {item.currency}</p>
                            <div className='quantity'>
                                <button className="minus" onClick={() => handleDecrement(item)}>
                                    -
                                </button>
                                <label>{item.quantity}</label>
                                <button className="plus" onClick={() => handleIncrement(item)}>
                                    +
                                </button>
                            </div>
                            <div className='cart' onClick={() => handleAddToCart(item)} > <svg width='24px' fill='#be7af9' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.43 122.88" ><g><path d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.23c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M63.49,23.76h17.76v18.02 h15.98L72.39,65.95L47.51,41.78h15.98V23.76L63.49,23.76z M53.69,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.24,9.48-9.48,9.48 c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48 c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C83.31,108.17,87.55,103.92,92.79,103.92L92.79,103.92z" /></g></svg></div>
                        </div>




                    </div>
                )
            }

        </div>
    )
}

export default AllProduct