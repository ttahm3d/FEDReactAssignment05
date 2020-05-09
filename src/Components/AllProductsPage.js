import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';

function AllProductsPage () {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    },[]);


    return(
        <div className="content">
            <h1>Products List</h1>
            <ProductsList prodList={Products} />
        </div>
    )
}

export default AllProductsPage;