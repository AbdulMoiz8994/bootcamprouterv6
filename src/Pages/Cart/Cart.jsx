import React from 'react'
import {products} from '../../Data/data.json'
import {useParams} from 'react-router-dom'


export const Cart = () => {
    // console.log(products)

    const {id} = useParams()
    console.log("ID FROM CART: ", id);
    const shoe=products[id]
    console.log(shoe)


if(!shoe){
    return <h2>Product Not Found</h2>
}

    return (
        <div>
            <h1>we are on cart</h1>
            <h2>{shoe.name}</h2>
            <img src={shoe.image} alt="images"  height="500px" style={{}}/>
            <h2>${shoe.price}</h2>
        </div>
    )
}
