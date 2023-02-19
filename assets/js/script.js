const limit = 5;
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

const pokemonList = document.querySelector('#pokemonList');

let createPokemon = (pokemon) =>{
    return `<li class="pokemon">
                <span class="number">#001</span>
                <h2 class="name">${pokemon.name}</h2>
                <div class="content">
                    <div class="types">
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                    <div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur"></div>
                </div>
            </li>`
    
}

let a = fetch(url)
    .then((request)=> request.json())
    .then((json)=> json.results)
    .then((pokemon)=>{
        pokemon.map((pokemons)=>{
            
            let htmlPokemon = createPokemon(pokemon)
            pokemonList.innerHTML += htmlPokemon;
        })

        

    })
    .catch((err)=> console.error(`Erro: ${err}`))

