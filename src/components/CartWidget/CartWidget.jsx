import { BsCart} from "react-icons/bs";
import "./cart.css"
import useCartContext from "../../hook/useCartContext.jsx"
import { Link } from "react-router-dom";



const CartWidget = () => {
    const { qtyCart }= useCartContext()
    return(  
          <Link to='/cart'  className="divUNO">
             <button className="cartWidg">
            <BsCart className="iconCart"/>
            <div className="divDOS">
              <br></br>
            <span>{qtyCart()}</span>
            </div>
            </button>
          </Link>
        
    )
}
export default CartWidget
