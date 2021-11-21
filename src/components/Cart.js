import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {URL_CART} from '../helpers/URL'

const Cart = () => {

    const getCart = (url) => {
        axios.get(url)
        .then(res => setCart(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCart(URL_CART)
        console.log(cart)
    },)

    
    //state. we change this states values and POST it to the API. 
    const [cart, setCart] = useState({
        "type": "",
        "price": '',
        "qty": '',
        "img": "https://res.cloudinary.com/diqhctpcx/image/upload/v1636836844/guappjolotas/bebidas/Property_1_champurrado_a3bztk.svg"
    },[])

    const createCart = () => {
        axios.post(URL_CART, cart)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>

        </div>
    )
}

export default Cart