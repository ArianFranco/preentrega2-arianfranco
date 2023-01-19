import { useEffect, useState } from "react";
import Pokemon from "../../components/Pokemon/Pokemon";

const Home = () => {
    const [ pokemonList, setPokemonList] = useState([])

    const getPokemons= fetch('https://pokeapi.co/api/v2/pokemon?limit=15offset=0',{
        method:'GET'
    }
    );

    useEffect(() => {
        getPokemons
        .then((resp) => resp.json())
        .then(async (data) => {
            // setPokemonList(data.results);
            const listaCompleta = Promise.all(
                data.results.map(async (pokemonItem) => {
                return await fetch(pokemonItem.url)
                .then((response) => response.json())
                .then((detail) => {
                    console.log(detail)
                    const newObject = {
                        name: detail.name,
                        frontImg: detail.sprites.front_default,
                        weight: detail.weight,
                    }
                    setPokemonList((currenValue) => [...currenValue, newObject])
                    // console.log(newObject)
                })
                .catch((error) => console.log(error))
            })
            )
            return listaCompleta;

        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            { pokemonList.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemonItem={pokemon} />
            ))}
        </div>
    )
}

export default Home
