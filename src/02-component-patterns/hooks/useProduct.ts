import { useState } from "react"


export const useProduct = () => {
 
    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) : void =>{
        setCounter((prev)=> Math.max(value + counter, 0))
    }

    return {
        counter,

        increaseBy
    }

}
