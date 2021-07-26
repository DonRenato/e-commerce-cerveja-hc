import React from 'react'
import BeersCart from '../BeersCart'

export default function CartItems() {
  return (
 <div>
  <footer>
       <ul>
        <BeersCart name="Fuller's London Pride" price="32,00"/>
        <BeersCart name="Old Speckled Hen" price="37,00" /> 
       </ul>

     </footer>
  </div>
  );

}