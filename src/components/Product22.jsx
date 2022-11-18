// import React, { useState, useEffect } from "react";
// import './Product1.css';
// import axios from "axios";

// const Product2 = () => {
//     const [products, setProducts] = useState([]);

//     const options = {
//         method: 'GET',
//   url: 'https://real-time-product-search.p.rapidapi.com/product-offers',
//   params: {product_id: '11577822456427762145', country: 'us', language: 'en'},
//   headers: {
//     'X-RapidAPI-Key': '2f84a19e33msh4a754d8e4ea72fap1e018fjsneecd004a0fdc',
//     'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
//   }
//     };
//     axios.request(options).then(function (response) {
//         console.warn(response.data.data);
//         setProducts(response.data.data);
//     }).catch(function (error) {
//         console.error(error);
//     });


//     return(
//         <>
//         <div className="head3">
//                 <h2>Alibaba</h2>
//         </div>

//         <div className="main-card">
//         {products.map((data, index) => {
//             return (
//                 <div key={index} className='card' type="none">
//                     {/* <img className="posterimage" src={data.images} alt="imageposter" ></img> */}
//                     <p className="line2">{data.store_name} </p>
//                     <p className="line3"><b>{data.price}</b></p>

//                 </div>

//             )
//         })}
//         </div>

//         </>
//     )

// }
// export default Product2;
