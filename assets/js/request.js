const pokeApi = {}

const modelPokemon = (pokemonModel) => {
    const pokemon = new Pokemon();
    pokemon.setId(pokemonModel.order);
    pokemon.setName(pokemonModel.name);
    pokemon.setTypes(pokemonModel.types.map((slot)=>slot.type.name));
    pokemon.setType(pokemon.getTypes()[0]);
    pokemon.setImage(pokemonModel.sprites.other.home.front_default);

    return pokemon;
} 

pokeApi.getDetails = (pokemons) => {
    return fetch(pokemons.url)
        .then((details)=> details.json())
        .then(modelPokemon)
}

pokeApi.getPokemons = (offset,limit) => {
  
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(url)
            .then((request)=> request.json())
            .then((json)=> json.results)
            .then((pokemons)=> pokemons.map(pokeApi.getDetails))
            .then((details) => Promise.all(details)) 
           
}