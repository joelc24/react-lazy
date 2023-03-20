import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'
import { createContext, ReactElement } from 'react'
import { ProductContextProps, ProductCardProps, Product } from '../interfaces/interfaces'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext



export const ProductCard = ({ children, product, className } : ProductCardProps) => {

    const { counter, increaseBy } = useProduct()
    
  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        
    <div className={ `${styles.productCard} ${className}` }>

        { children }

        {/* <ProductImage img={ product.img } />

        <ProductTitle title={ product.title } />

        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
    </div>
    </Provider>
  )
}


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
