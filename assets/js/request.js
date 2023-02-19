const pokeApi = {}

pokeApi.getDetails = (pokemons) => {
    return fetch(pokemons.url).then((details)=> details.json())
}

pokeApi.getPokemons = (offset=0,limit=10) => {
  
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(url)
            .then((request)=> request.json())
            .then((json)=> json.results)
            .then((pokemons)=> pokemons.map(pokeApi.getDetails))
            .then((details) => Promise.all(details)) 
           
}