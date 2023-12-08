import { useContext } from "react"
import cartContext from "../components/context/CreateCartContext"

const useCartContext = () =>{
    return useContext(cartContext)
}

export default useCartContext