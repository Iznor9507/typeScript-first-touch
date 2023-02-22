import React from 'react'
import { IProduct } from '../models'
import './pro.css'

interface ProductProps { 
product: IProduct
}
function Product(props: ProductProps) {
    
const tovar = props.product

return (
    <div className='container'>
        <div className='prods'>
        <h1>{tovar.title}</h1>
        <h3>{tovar.category}</h3>
        <img className='img' src={tovar.image} alt='photo' />
            <h3 className='desc'>{tovar.description}</h3>
            <h2>{tovar.price}$</h2>

        </div>
    </div>
    )
}

export default Product
