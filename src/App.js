import React, { useState } from 'react'
import { AppRouter } from './router/AppRouter'
import { CartContext } from './components/CartContext';


const App = () => {

    const [contextCart, setContextCart] = useState([])

    return (
        <CartContext.Provider value={{ contextCart, setContextCart }}>
            <AppRouter />
        </CartContext.Provider>
    )
}

export default App