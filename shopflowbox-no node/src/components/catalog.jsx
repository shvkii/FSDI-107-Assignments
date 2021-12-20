import "./catalog.css";
import Product from "./product";
import React, { useEffect, useState} from 'react';



const Catalog = () => {

    return (
        <div className="catalog">
            <h1>This is my awesome catalog</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>  
        </div>
    );
}

export default Catalog;
    























   
