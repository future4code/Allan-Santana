import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokeCard = (props) => {
    const [pokemon, updatePokemon] = useState(props.pokemon)

    function pegaPokemon(pokeName) {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            updatePokemon( response.data );
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        pegaPokemon(pokemon)
        // updatePokemon()
    }, [pokemon])

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}

export default PokeCard
