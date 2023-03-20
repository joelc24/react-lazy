import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products :Product[]= [ product, product2 ]

interface ProductInCart extends Product {
    count: number
}


export const ShoppingPages = () => {

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

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {
            products.map((product)=>(

                <ProductCard 
                  key={product.id}
                  product={ product } 
                  className="text-white bg-dark"
                  onChange={onProductCountChange }
                >
                  <ProductImage className="custom-image" style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                  }}/>
                  <ProductTitle className="text-bold" />
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>
            ))

          }

        </div>

        <div className="shopping-cart">
            <ProductCard 
              product={ product2 } 
              className="text-white bg-dark"
              style={{ width: '100px' }}
            >
              <ProductImage className="custom-image" style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }}/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
            
            <ProductCard 
              product={ product } 
              className="text-white bg-dark"
              style={{ width: '100px' }}
            >
              <ProductImage className="custom-image" style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }}/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
        </div>

        <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div>

    </div>
  )
}
