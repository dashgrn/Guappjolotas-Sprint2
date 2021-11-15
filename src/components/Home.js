import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section, H1, Sh3, Categorydiv, Input } from '../styles/HomeStyles'
import { Card, Row, Column, Img, Price, ProdName } from '../styles/CardStyles'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
import { URL_GUAJOLOTAS, URL_BEBIDAS, URL_TAMALES } from '../helpers/URL'

export const Home = () => {

    let productFlag = null

    const [producto, setProducto] = useState([])

    useEffect(() => {
        if (productFlag === null) {
            getProducto(URL_GUAJOLOTAS) //BY DEFAULT, THIS IS THE PAGE WE SHOW WHEN FIRST LOAD
        }

    }, [])

    const getProducto = (url) => {
        axios.get(url)
            .then(res => setProducto(res.data))
    }

    const handleGuajolotaTbn = () => {
        setProducto([])
        getProducto(URL_GUAJOLOTAS)
    }
    const handleBebidaTbn = () => {
        setProducto([])
        getProducto(URL_BEBIDAS)
    }
    const handleTamalbn = () => {
        setProducto([])
        getProducto(URL_TAMALES)
    }



    console.log(producto)

    //THE STUFF TO RENDER GOES BELOW
    return (
        <>
            <div>
                <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636836844/guappjolotas/card-logo_i9dxmk.png" height="64" alt="logo"></img>
                <H1>Nada como una buena Guajolota para empezar el día</H1>

            </div>
            <Section>
                <Input placeholder="Sabor de guajolota, bebidas..."></Input>
            </Section>
            <div>
                <Categorydiv className="justify-content-center">
                    <Nav.Item>
                        <Sh3 onClick={handleGuajolotaTbn}>Guajolota</Sh3>
                    </Nav.Item>
                    <Nav.Item>
                        <Sh3 onClick={handleBebidaTbn}>Bebidas</Sh3>
                    </Nav.Item>
                    <Nav.Item>
                        <Sh3 onClick={handleTamalbn}>Tamales</Sh3>
                    </Nav.Item>
                </Categorydiv>
            </div>

            <div>
                {
                    producto.map(prod => (
                        <Card key={prod.id}>
                            <Link to="/product" style={{ textDecoration: 'none'}}>
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
        </>
    )
}