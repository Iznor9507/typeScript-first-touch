import React from "react"
import { IProduct } from "../models"


//ПОЛЬЗОВАТЕЛЬСКИЙ ХУК

export function useProducts() {

    const [products, setProducts] = React.useState<IProduct[]>([])
    const [toggle, setToggle] = React.useState(false)
    const [loading, setLaoding] = React.useState(false)
    const [modalControl, setModalControl] = React.useState(false)
    
     const handleClickOpen = () => {
    setModalControl(true)
    console.log('CLICK TRUE')
    }
     const handleClickClose = () => {
    setModalControl(false)
    console.log('CLICK FALSE')

    }
    
    
      React.useEffect(()  => {
        setLaoding(true)
        fetch(`https://fakestoreapi.com/products`)
        .then(res =>  res.json())
        .then(json => setProducts(json))
        setLaoding(false)
      }, [toggle])
    
return {toggle, products, loading, setToggle, modalControl, handleClickClose, handleClickOpen }
}