const Pokemon = ({pokemonItem}) => {
    return (
        <div>
            <img src={pokemonItem.frontImg} />
            <h2>{pokemonItem.name}</h2>
            <h2>{pokemonItem.weight}</h2>
        </div>
    )
}

export default Pokemon