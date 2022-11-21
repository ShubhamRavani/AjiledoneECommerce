import React, { useState, useEffect } from "react";
import './Product1.css';
import axios from "axios";

const Product1 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/')
            .then(response => {
                setProducts(response.data.products)
                console.warn(response.data.products)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return(
        <>
        <div className="head3">
                <h2>Amazon</h2>
        </div>

        <div className="main-card">
        {products.map((data, index) => {
            return (
                <div key={index} className='card' type="none">
                    <img className="posterimage" src={data.images} alt="imageposter" ></img>
                    <p className="line2">{data.title} </p>
                    <p className="line3"><b>{data.price}</b></p>

                </div>

            )
        })}
        </div>

        </>
    )

}
export default Product1;
