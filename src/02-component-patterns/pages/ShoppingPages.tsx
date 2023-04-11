import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
import '../styles/custom-styles.css'

const product = products[0]




export const ShoppingPages = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="text-white bg-dark"
        initialValues={{
          count: 4,
          maxCount: 12
        }}
      >
        {
          ({reset, count, maxCount, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage className="custom-image" style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              { !isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>}
              <span>{count} - {maxCount}</span>
            </>
          )
        }
      </ProductCard>


    </div>
  )
}
