import React from 'react'
import products from '../../Data/data.json'
import {useParams} from 'react-router-dom'


export const Cart = () => {
    // console.log(products)

    const {id} = useParams()
    const shoe=products[id]


if(!shoe){
    return <h2>Product Not Found</h2>
}

    return (
        <div>
            <h1>we are on cart</h1>
            <h2>{shoe.name}</h2>
            <img src={shoe.img} alt="images"  height="500px" style={{}}/>
            <h2>{shoe.price}</h2>
        </div>
    )
}
