import React from 'react'

export default function BeersCart(props) {
  return (
    <li>
     <h2 className="list-title">{props.name}</h2>
     <span className="list-price">R${props.price}</span>
     <button className="remove-btn">Remover</button>
    </li>
  );

}