import React from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// takes a number, if less than 999 will add two 0's and slice the final 3 numbers. 
// Example: 1 would end up 001, whereas 11 would end up as 0011 and have the final 3 sliced to equal 011
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

function Pokecard({id, name, type, exp}) {
    let imgSrc = `${POKE_API}${padToThree(id)}.png`
    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{name}</h1>
            <div className="Pokecard-image">
                <img src={imgSrc} alt="name" />
            </div>
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">Exp: {exp}</div>
        </div>
        
    ); 
}

export default Pokecard;