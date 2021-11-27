import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DivCart } from '../styles/ProductStyles'
import {Input, Section} from '../styles/HomeStyles'

const Search = () => {
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

            <div>
                <Section>
                    <Input placeholder="Sabor de guajolota, bebidas..."></Input>
                </Section>
            </div>
        </div>
    )
}

export default Search
