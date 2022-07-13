import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


function Pokedex({pokemon, exp, isWinner}) {
    let title;
    if(isWinner){
        title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
        title = <h1 className="Pokedex-loser">Losing Hand</h1>
    }
    return (
        <div className="Pokedex">
            {title}
            <p>Total Experience: {exp}</p>
            <div className="Pokedex-cards">
            {pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
        </div>

    )
}

export default Pokedex;