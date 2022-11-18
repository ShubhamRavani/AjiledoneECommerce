import React, { useState, useEffect } from "react";
import './Product1.css';
import axios from "axios";

const Product2 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=20')
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    return(
        <>
        <div className="head3">
                <h2>Fake Store</h2>
        </div>

        <div className="main-card">
        {products.map((data, index) => {
            return (
                <div key={index} className='card' type="none">
                    <img className="posterimage" src={data.image} alt="imageposter" ></img>
                    <p className="line2">{data.title} </p>
                    <p className="line3"><b>{data.price}</b></p>

                </div>

            )
        })}
        </div>

        </>
    )

}
export default Product2;
