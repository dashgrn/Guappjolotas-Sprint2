import React, { useEffect, useState } from 'react'
import { URL_BEBIDAS } from '../helpers/URL'
import axios from 'axios'
import { CardBtn, QtyBtn, Price, Price2, ProdName, Img, FlavorGrid, FlavorItem, AddToCartBtn, BtnAddToCartContainer, ProductMain, Row, Column } from '../styles/ProductStyles'


export const Product = () => {

    const [productFlag, setProductFlag] = useState(undefined)

    const [recomendedProduct, setRecomendedProduct] = useState([])

    const getRecomend = () => {
        axios.get(URL_BEBIDAS)
            .then(res => setRecomendedProduct(res.data))
    }

    useEffect(() => {
        getRecomend()
    }, [])

    console.log(recomendedProduct)

    return (
        <div>
            <ProductMain>
                <section>
                    <Img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636988787/guappjolotas/details/g-verde_mfrtzi.svg" />
                    <ProdName>Guajolota</ProdName>
                    <Price>$25 MXN</Price>

                    <CardBtn>
                        <QtyBtn>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636994750/guappjolotas/interface/minus-circle_xyliah.svg" />
                        </QtyBtn>
                        <h2>1</h2>
                        <QtyBtn>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636989826/guappjolotas/interface/plus-circle_zfrpde.svg" />
                        </QtyBtn>
                    </CardBtn>
                </section>

                <section>
                    <h3>Sabor</h3>
                    <FlavorGrid>
                        <FlavorItem>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636836847/guappjolotas/sabores/Property_1_verde_mek95v.svg" />
                        </FlavorItem>
                        <FlavorItem>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636836849/guappjolotas/sabores/Property_1_mole_fuheii.svg" />
                        </FlavorItem>
                        <FlavorItem>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636836848/guappjolotas/sabores/Property_1_rajas_xsqby1.svg" />
                        </FlavorItem>
                    </FlavorGrid>
                </section>

                {/* GUAJOLOCOMBO */}
                <section>
                <h2>Gualolocombo</h2>
                                <h5>Selecciona la bebida que más te guste y disfruta de tu desayuno.</h5>
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