import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { URL_CART } from '../helpers/URL'
import { Column, DivCart2, Row } from '../styles/ProductStyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { Card, Img, Price, ProdName } from '../styles/CardStyles';
import { AddToCartBtn, BtnAddToCartContainer } from '../styles/ProductStyles';

let cartArr = [];

const getCart = async(url) => {
    await axios.get(url)
        .then(res => cartArr = cartArr.push(...res.data))
        .catch(err => console.log(err))
}


const Cart = () => {

    //state. we change this states values and PUT it to the API. 
    const [cartEdit, setCartEdit] = useState({
        "type": "",
        "price": '',
        "qty": '',
        "img": ""
    }, [])

    const [cartArrayInc, setCartArrayInc] = useState(cartArr)

    useEffect(() => {
        getCart(URL_CART)
        setCartArrayInc(cartArr)
        console.log(cartArr)
        console.log(cartArrayInc)
    }, [])

    // const createCart = async (cart) => {
    //     await axios.post(URL_CART, cart)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }
    

    const cardClick = (id, category) => {
        console.log(id, category)
    }


    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <DivCart2>
                    <Link to="/product">
                        <FontAwesomeIcon link icon={faArrowLeft} style={{ color: "grey" }} />
                    </Link>
                </DivCart2>
                <div style={{ display: "flex", margin: "auto" }}>
                    <h2 className="hcart">Carrito</h2>
                </div>
            </div>

           
            <div>
                {
                    cartArr.map(prod => (
                        <Card key={prod.id}>
                            <Link to="/product" onClick={(e) => { cardClick(prod.id, prod.category) }} style={{ textDecoration: 'none' }}>
                                <Row>
                                    <Column>
                                        <Img src={prod.img} alt={prod.type} />
                                    </Column>
                                    <Column>
                                        <ProdName>{prod.type}</ProdName>
                                        <Price>${prod.price} MXN</Price>
                                    </Column>
                                </Row>
                            </Link>
                        </Card>
                    ))
                }
            </div>

            <BtnAddToCartContainer>
                <AddToCartBtn>
                    <span>Pagar</span>

                </AddToCartBtn>
            </BtnAddToCartContainer>

        </div>
    )
}

export default Cart