import { ReactElement } from "react"
import { Props as PropsButtonsProps } from "../components/ProductButtons"
import { Props as ProductCardPros } from "../components/ProductCard"
import { Props as ProductImageProps } from "../components/ProductImage"
import { Props as ProductTitleProps } from "../components/ProductTitle"

// export interface ProductCardProps {
//     product: Product,
//     children?: ReactElement | ReactElement[],
//     className?: string
// }

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value:number) => void,
    product: Product
}


export interface ProductCarHOCProps {
    ({ children, product }: ProductCardPros): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: PropsButtonsProps) => JSX.Element
}


export interface onChangeArgs {
    product: Product, 
    count: number
}
