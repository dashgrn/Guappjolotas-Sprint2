import React from 'react'
// import { Divbkg, Sh3, Categorydiv } from '../styles/HomeStyles'
import Nav from 'react-bootstrap/Nav'

export const Home = () => {

    return (
        <>
            <div>
                <img src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636836844/guappjolotas/card-logo_i9dxmk.png" height="64" alt="logo"></img>
                <h1>Nada como una buena Guajolota para empezar el día</h1>
                <input placeholder="Sabor de guajolota, bebidas..."></input>
            </div>
            <div>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link>Guajolota</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Bebidas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Tamales</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            
        </>
    )
}