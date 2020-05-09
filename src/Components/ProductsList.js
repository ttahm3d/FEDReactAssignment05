import React from 'react'

import Products from './Products'

const ProductsList = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.prodList.map((item) => {
                            return <Products key={item.id} p={item} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;