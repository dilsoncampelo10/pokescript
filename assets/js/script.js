


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

pokeApi.getPokemons()
    .then((pokemon)=>{
        pokemon.map((pokemons)=>{
           
            let list = createPokemon(pokemons);
            pokemonList.innerHTML += list;
           
        })
        

    })
    

