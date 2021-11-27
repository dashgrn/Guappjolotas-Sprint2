import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { URL_CART } from '../helpers/URL'
import { Column, DivCart2, Row, AddToCartBtn, BtnAddToCartContainer, RowPay } from '../styles/ProductStyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { Card, Img, Price, ProdName } from '../styles/CardStyles';
import { CartContext } from '../components/CartContext'
import { Col } from 'react-bootstrap';



const Cart = () => {


    const { contextCart, setContextCart } = useContext(CartContext)

    //state. we change this states values and PUT it to the API. 
    const [cartEdit, setCartEdit] = useState({
        "type": "",
        "price": '',
        "qty": '',
        "img": ""
    }, [])

    const [cartArrayInc, setCartArrayInc] = useState(contextCart)

    useEffect(() => {
        // getCart(URL_CART)
        // setCartArrayInc(cartArr)
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

    let total = 0

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
                    cartArrayInc.map(prod => (
                        <Card key={prod.id}>
                            <Link to="/product" onClick={(e) => { cardClick(prod.id, prod.category) }} style={{ textDecoration: 'none' }}>
                                <Row>
                                    <Column>
                                        <Img src={prod.img} alt={prod.type} />
                                    </Column>
                                    <Column>
                                        <ProdName>{prod.type}</ProdName>
                                        <p>x {prod.amount}</p>
                                        <Price>${prod.price}  MXN</Price>
                                    </Column>
                                </Row>
                            </Link>
                        </Card>
                    ))
                }
            </div>

            <Card>
                <RowPay>
                    <Column>
                        <h3 style={{flexDirection:"start"}}>Tota</h3>
                    </Column>
                    <Column>
                        <h3 style={{color:"#FA4A0C"}}>${cartArrayInc[0].price*cartArrayInc[0].amount} MXN</h3>
                    </Column>
                </RowPay>
            </Card>

            <BtnAddToCartContainer>
                <AddToCartBtn>
                    <span>Pagar</span>
                </AddToCartBtn>
            </BtnAddToCartContainer>

        </div>
    )
}

export default Cart