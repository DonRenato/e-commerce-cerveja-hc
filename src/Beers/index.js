import React from 'react'
import BeerCard from '../BeerCard'

export default function Beers() {
  return (
 <div>
  <main>
    <section className="beers-section">
      <BeerCard name="Guinness" url="/guinness.jfif" price="35,00"  />
      <BeerCard name="Fullers London Pride" url="/fullers.jpg" price="32,00"  />
      <BeerCard name="Old Speckled Hen" url="/oldspeckled.jpg" price="37,00"   />

        
    </section>
  </main>
  </div>
  );

}