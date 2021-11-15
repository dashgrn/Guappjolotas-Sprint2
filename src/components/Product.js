import React from 'react'
import { CardBtn, QtyBtn, Price, ProdName, Img, FlavorGrid, FlavorItem, AddToCartBtn, BtnAddToCartContainer, ProductMain, Row, Column } from '../styles/ProductStyles'


export const Product = () => {
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

                <section>
                    <h2>Gualolocombo</h2>
                    <h5>Selecciona la bebida que más te guste y disfruta de tu desayuno.</h5>

                    <div>
                        tes tes
                        <Row>
                            <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636836844/guappjolotas/bebidas/Property_1_champurrado_a3bztk.svg" alt="bebida" />
                            btn
                        </Row>
                        <Column>

                        </Column>

                    </div>
                </section>
            </ProductMain>

            <BtnAddToCartContainer>
                <AddToCartBtn>
                    Agregar 1 al carrito
                    <span> $25 MXN</span>
                </AddToCartBtn>
            </BtnAddToCartContainer>

        </div>
    )
}