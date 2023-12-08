import { useState } from "react";
import CreateCartContext from "./CreateCartContext";

const { Provider } = CreateCartContext 

// eslint-disable-next-line react/prop-types
function CartContextProvider({children}){
    const [cart, setCart] = useState([])
    
    const addToCart = (product, count) =>{
        if (product && product.id) {
            // verificar si el producto ya está en el carrito
            const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        
            if (existingProductIndex !== -1) {
              // si el producto ya está en el carrito, actualizar la cantidad
              const newCart = [...cart];
              newCart[existingProductIndex].qty += count;
              setCart(newCart);
            } else {
              // si el producto no está en el carrito, agregarlo como una nueva entrada
              setCart([...cart, { ...product, qty: count, id: product.id }]);
            }
          } 
    }

    const qtyCart = () => {
        const totalQty = cart.reduce((acc, current) => acc + (current.qty || 0), 0);
        return isNaN(totalQty) ? "0" : totalQty.toString();
    }
    const removeTCart = (id) =>{
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    const incrementCart = (id) =>{
            const newCart = [...cart]
            const index = cart.findIndex(e=>e.id===id)
            newCart[index].qty++
            setCart(newCart)
        }
   const decrementCart = (id) =>{
    const newCart = [...cart];
    const index = cart.findIndex(e => e.id === id);

    if (newCart[index].qty > 1) {
        newCart[index].qty--;
    } else {
        // si la cantidad es 0 o 1, elimina el elemento del carrito
        newCart.splice(index, 1);
    }

    setCart(newCart);
   
   }

    return(
      <Provider value={{cart, addToCart, qtyCart, removeTCart, incrementCart, decrementCart}}>
          {children}
      </Provider>
    )

    }


export default CartContextProvider



