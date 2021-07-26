import React from 'react'
import Logo from '../Logo';

export default function Navbar() {
  return (
 <div>
   <header>
       <nav>
          <Logo />
         <div className="nav-bar-actions">
           <div className="nav-bar-cart">
            <span className="nav-bar-cart-quantity">2 cervejas</span>
            <span className="nav-bar-cart-price">R$69,00</span>
           </div>
           <button className="clean-btn">Limpar</button>
         </div>
         
       </nav>
     </header>
 </div>
  );

}