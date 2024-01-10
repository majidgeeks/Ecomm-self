import { useEffect, useState } from "react";
import AppRouter from "./config/Router";
import CartContext from "./context/cart";

function App() {
   const [cart, setCart] = useState(0);

   useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [] ;
    setCart(cart.legnth);
   })

  return(

    <CartContext.Provider value={{cart, setCart}}>
       <AppRouter />;

    </CartContext.Provider>
      
      )
  
}

export default App;
