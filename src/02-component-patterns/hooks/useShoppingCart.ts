import { useState } from "react"
import { ProductInCart, Product } from "../interfaces/interfaces"


export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({count, product}: {count:number, product:Product}) =>{
    // console.log('onProductCountChange')

    setShoppingCart((oldShopinCart)=> {

      if (count == 0) {

        const { [product.id]: toDelete, ...rest } = oldShopinCart

        return rest

      }

      return {
        ...oldShopinCart,
        [product.id]: {...product, count}
      }
    })

  }

  return {
    onProductCountChange,
    shoppingCart
  }

}
