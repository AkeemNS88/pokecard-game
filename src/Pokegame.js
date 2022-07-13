import React from 'react';
import Pokedex from './Pokedex';

Pokegame.defaultProps = {
    pokemon: [
        { id: 1, name: 'Bulbasaur', type: 'grass', base_experience: 64 },
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 12, name: 'Butterfree', type: 'flying/bug', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ]
 };
function Pokegame({pokemon}) {
    // Hand 1 will be an empty array
     let hand1 = [];
    // Hand 2 will be an array of our pokedex pokemon
     let hand2 = [ ...pokemon ];
    // While hand 1 is less than hand 2, take a random index and multiply it by hand 2. Will go until even on both sides
     while(hand1.length < hand2.length) {
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
     }
    // will loop through hand 1 and for each pokemon it will take the base experience add it and reduce it starting with 0
     let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    // Same as above but for hand 2
     let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
        <div>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
        </div>
    )
};

export default Pokegame;