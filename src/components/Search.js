import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DivCart } from '../styles/ProductStyles'
import { Input, Section } from '../styles/HomeStyles'
import axios from 'axios'
import { URL_SEARCH } from '../helpers/URL'

const Search = () => {

    const [allProds, setAllProds] = useState([])

    const [inputValue, setInputValue] = useState({})

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        console.log(inputValue.query)
        await axios.get(`${URL_SEARCH}${inputValue.query}`)
            .then(res => {
                let resp = res.data
                setAllProds(resp)
            })
            .catch(err => console.error(err))
        console.log(allProds)
    }

    const handleSearchChange = ({ target }) => {
        setAllProds([])
        console.log(target.value)
        console.log(allProds)
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
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

            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <Section>
                        <Input
                            onChange={(evt) => handleSearchChange(evt)}
                            name="query"
                            placeholder="Sabor de guajolota, bebidas..."></Input>
                    </Section>
                </form>

            </div>
        </div>
    )
}

export default Search