const pokemonList = document.querySelector('#pokemonList');
const btnMore = document.querySelector('#more-pokemon');

let offset = 0;
let limit = 12;

const createPokemon = (pokemon) =>{
    return `<li class="pokemon ${pokemon.getType()}">
                <span class="number">#${pokemon.getId()}</span>
                <h2 class="name">${pokemon.getName()}</h2>
                <div class="content">
                    <div class="types">
                      ${pokemon.getTypes().map((type)=> `<span class="type ${type}">${type}</span>`).join('')}
                    </div>
                    <div><img src="${pokemon.getImage()}" alt="Bulbasaur"></div>
                </div>
            </li>`
    
}



const loadPokemons = (offset,limit) => {
    pokeApi.getPokemons(offset,limit)
    .then((pokemon)=>{
        pokemon.map((pokemons)=>{
            let list = createPokemon(pokemons);
            pokemonList.innerHTML += list;
            console.log(pokemons)
        })
    })
}
loadPokemons(offset,limit);

btnMore.addEventListener('click',()=>{
    offset += limit;
    loadPokemons(offset,limit);
})