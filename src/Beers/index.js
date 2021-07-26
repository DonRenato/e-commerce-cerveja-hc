import React from 'react'
import BeerCard from '../BeerCard'

export default function Beers() {
  return (
 <div>
  <main>
    <section className="beers-section">
      <BeerCard name="Guinness" url="/guinness.jfif" price="35,00" value="Guinness"  />
      <BeerCard name="Fuller's London Pride" url="/fullers.jpg" price="32,00" value="Fuller's London Pride"  />
      <BeerCard name="Old Speckled Hen" url="/oldspeckled.jpg" price="37,00" value="Old Speckled Hen"   />

        
    </section>
  </main>
  </div>
  );

}