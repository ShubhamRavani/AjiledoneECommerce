import React, { useState, useEffect } from "react";
import './Product1.css';
import axios from "axios";

const Product1 = () => {
    const [products, setProducts] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/product',
        params: { categoryID: 'aps', keyword: 'iphone', country: 'US', page: '1' },
        headers: {
            'X-RapidAPI-Key': '2f84a19e33msh4a754d8e4ea72fap1e018fjsneecd004a0fdc',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        setProducts(response.data.docs);
    }).catch(function (error) {
        console.error(error);
    });


    return(
        <>
        <div className="head3">
                <h2>Amazon</h2>
        </div>

        <div className="main-card">
        {products.map((docs, index) => {
            return (
                <div key={index} className='card' type="none">
                    <img className="posterimage" src={docs.product_main_image_url} alt="imageposter" ></img>
                    <p className="line2">{docs.product_title} </p>
                    <p className="line3"><b>{docs.app_sale_price}</b></p>

                </div>

            )
        })}
        </div>

        </>
    )

}
export default Product1;
