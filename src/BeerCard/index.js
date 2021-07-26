import React from 'react'

export default function CartItems(props) {
  return (
    <div className="card">
      <img src={props.url} alt="" />
      <h1 className="card-title">{props.name}</h1>
      <span className="card-title">R${props.price}</span>
      <button>Adicionar</button>
    </div>
 
  );

}



