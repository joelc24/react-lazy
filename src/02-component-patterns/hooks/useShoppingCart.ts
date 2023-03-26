import { useState } from "react"
import { ProductInCart, Product } from "../interfaces/interfaces"


export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({count, product}: {count:number, product:Product}) =>{
    // console.log('onProductCountChange')

    setShoppingCart((oldShopinCart)=> {

      const productInCart: ProductInCart = oldShopinCart[product.id] || {...product, count: 0 }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        
        return {
          ...oldShopinCart,
          [product.id]: productInCart
        }
      }


      //* Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShopinCart

      return rest


      // if (count == 0) {

      //   const { [product.id]: toDelete, ...rest } = oldShopinCart

      //   return rest

      // }

      // return {
      //   ...oldShopinCart,
      //   [product.id]: {...product, count}
      // }
    })

  }

  return {
    onProductCountChange,
    shoppingCart
  }

}
