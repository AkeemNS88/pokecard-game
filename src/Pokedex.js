import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


function Pokedex({pokemon, exp, isWinner}) {
    return (
        <div className="Pokedex">
            <h1>Pokedex!</h1>
            <p>Total Experience: {exp}</p>
            <p>{isWinner ? 'WINNER!' : 'LOSER!'}</p>
            <div className="Pokedex-cards">
            {pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
        </div>

    )
}

export default Pokedex;