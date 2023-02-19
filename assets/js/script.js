const limit = 10;
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

const pokemonList = document.querySelector('#pokemonList');

let createPokemon = (pokemon) =>{
    return `<li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <h2 class="name">${pokemon.name}</h2>
                <div class="content">
                    <div class="types">
                        <span>${pokemon.types[0].type.name}</span>
                        
                    </div>
                    <div><img src="${pokemon.sprites.other.home.front_default}" alt="Bulbasaur"></div>
                </div>
            </li>`
    
}

let a = fetch(url)
    .then((request)=> request.json())
    .then((json)=> json.results)
    .then((pokemon)=>{
        pokemon.map((pokemons)=>{
            fetch(pokemons.url).then((details)=> details.json())
            .then((jsonPoke)=> {
                let htmlPokemon = createPokemon(jsonPoke);
                pokemonList.innerHTML += htmlPokemon;
                console.log(jsonPoke.types[0].type.name)
               
            })
           
        })
        

    })
    .catch((err)=> console.error(`Erro: ${err}`))

