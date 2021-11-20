import React, { useEffect, useState } from 'react'
import { URL_BEBIDAS, URL_GUAJOLOTAS, URL_SABORES, URL_SABORES_BEBIDAS, URL_TAMALES } from '../helpers/URL'
import axios from 'axios'
import { CardBtn, QtyBtn, Price, Price2, ProdName, Img, FlavorGrid, FlavorItem, AddToCartBtn, BtnAddToCartContainer, ProductMain, Row, Column, DivCart } from '../styles/ProductStyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export const Product = () => {

    let prodId = JSON.parse(localStorage.getItem('idKeeper'))
    console.log(prodId);

    useEffect(() => {
        getCurrProduct(prodId)
        getRecomend(prodId.category)
        getFlavors(prodId.category)
        console.log(recomendedProduct);
        console.log(flavors)
        console.log(currentProduct)
    }, [])

    const [recomendedProduct, setRecomendedProduct] = useState([]) //array producto recomendado
    const [flavors, setFlavors] = useState([]) //FLAVORS ARRAY 
    const [currentProduct, setCurrentProduct] = useState({}) //current product


    const getCurrProduct = (prod) => {
        console.log(prod)
        let currArr = []
        let currProd = {}
        if (prod.category === 'guajolotas') {
            axios.get(URL_GUAJOLOTAS)
                .then(res => currArr.push(...(res.data)))
        } else if (prod.category === 'bebidas') {
            axios.get(URL_BEBIDAS)
                .then(res => currArr.push(...(res.data)))
        } else if (prod.category === 'tamales') {
            axios.get(URL_TAMALES)
                .then(res => currArr.push(...(res.data)))
        }
        currProd = currArr.find(product => product.id === prod.id)
        console.log(currArr)
    }

    const getRecomend = (category) => {
        if (category === 'guajolotas' || category === 'tamales') {
            axios.get(URL_BEBIDAS)
                .then(res => setRecomendedProduct(res.data))
        } else if (category === 'bebidas') {
            axios.get(URL_GUAJOLOTAS)
                .then(res => setRecomendedProduct(res.data))
        }
    }

    const getFlavors = (category) => {
        if (category === 'guajolotas' || category === 'tamales') {
            axios.get(URL_SABORES)
                .then(res => setFlavors(res.data))
        } else if (category === 'bebidas') {
            axios.get(URL_SABORES_BEBIDAS)
                .then(res => setFlavors(res.data))
        }
    }


    return (
        <div>
            <div className="header">
                <DivCart>
                    <Link to="/">
                        <FontAwesomeIcon link icon={faArrowLeft} style={{ color: "grey" }} />
                    </Link>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: "grey" }} />
                    </Link>
                </DivCart>
            </div>
            <ProductMain>
                <section>
                    <div>

                        <Img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636988787/guappjolotas/details/g-verde_mfrtzi.svg" alt="" />
                        <ProdName>Guajolota</ProdName>
                        <Price>$25 MXN</Price>

                    </div>

                    <CardBtn>
                        <QtyBtn>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636994750/guappjolotas/interface/minus-circle_xyliah.svg" alt="" />
                        </QtyBtn>
                        <h2>1</h2>
                        <QtyBtn>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636989826/guappjolotas/interface/plus-circle_zfrpde.svg" alt="" />
                        </QtyBtn>
                    </CardBtn>
                </section>

                <section>
                    <h3>Sabor</h3>
                    <div>

                        <FlavorGrid>
                            {
                                flavors.map(flavor => (
                                    <div key={flavor.id}>
                                        <FlavorItem>
                                            <img src={flavor.img} />
                                        </FlavorItem>
                                    </div>
                                ))

                            }
                        </FlavorGrid>

                    </div>
                </section>

                {/* GUAJOLOCOMBO */}
                <section>
                    <h2>Gualolocombo</h2>
                    <h5>Selecciona la bebida que más te guste y disfruta de tu desayuno.</h5>
                    <div>
                        {
                            recomendedProduct.map(prod => (
                                <div key={prod.id}>

                                    <div>
                                        <Row>
                                            <img src={prod.img} alt="bebida" />
                                            <Column>
                                                <input type="checkbox" />
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Column>
                                                <h4>{prod.type}</h4>
                                            </Column>
                                            <Column>
                                                <Price2>
                                                    + ${prod.price} MXN
                                                </Price2>
                                            </Column>
                                        </Row>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

            </ProductMain>

            {/* <BtnAddToCartContainer>
                <AddToCartBtn>
                    Agregar 1 al carrito
                    <span> $25 MXN</span>
                </AddToCartBtn>
            </BtnAddToCartContainer> */}

        </div>
    )
}