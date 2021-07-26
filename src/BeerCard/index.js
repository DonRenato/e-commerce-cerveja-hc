import React from 'react'

export default function CartItems(props) {

  function saveBeer(name, price){
    const beer ={
      name,
      price
    }

    const beer_json = JSON.stringify(beer)
    localStorage.setItem('product',beer_json)
  }

  return (
    <div className="card">
      <img src={props.url} alt="" />
      <h1 className="card-title">{props.name}</h1>
      <span className="card-title">R${props.price}</span>
      <button onClick={()=> saveBeer(props.name, props.price)}>Adicionar</button>
    </div>
 
  );

}



