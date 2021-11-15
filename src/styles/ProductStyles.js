import styled from 'styled-components'

export const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 200px;
`

export const CardBtn = styled.div`
    justify-content: space-around;
    display: flex;
    border-radius : 25px;
    background-color: white;
    padding: 1px;
    margin-inline: 75px;
`

export const QtyBtn = styled.button`
    padding: 0;
    border: none;
    background: none;
`

export const ProdName = styled.h3`
    text-align: center;
    color: black;
    font-size: 28px;
`

export const Price = styled.h3`
    text-align: center;
    color: #FA4A0C;
    font-size: 22px;
`

export const FlavorGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`

export const FlavorItem = styled.div`
     justify-content: center;
     margin-bottom: 5px;
`

export const AddToCartBtn = styled.button`
    background-color: #F6F6F9;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FA4A0C;
    border-radius: 40px;
    height: 70px;
    width: 300px;
    color: white;
    padding: 24px;
    text-align: center;
    font-size: 18px;
    border: none;
`

export const BtnAddToCartContainer = styled.div`
    backdrop-filter: blur(48px);
    width: 100vh;
    background-color:#F2F2F2;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    position: fixed;
    bottom: 0px;
    margin-top: auto;
`

export const ProductMain = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    bottom: 70px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    flex: 50%;
`
