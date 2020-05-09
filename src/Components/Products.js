import React from 'react'

const Products = (props) => {
    return (
        <tr>
            <td>{props.p.id}</td>
            <td>{props.p.productName}</td>
            <td>{props.p.quantity}</td>
            <td>Rs. {props.p.price}</td>
        </tr>
    )
}

export default Products;
