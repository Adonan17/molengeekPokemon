import { setupMenu } from "./menu.js";

export const pokemonCount = 151;
export var pokedex = {};
export let chosen = false

// wesh le sang

window.onload = async function() {
    getPokemon(1);

    // console.log(pokedex);
    for (let i = 1; i < pokemonCount; i++) {
        await getPokemon(i);
        let pokemon = document.createElement('div');
        pokemon.id = i;    
        pokemon.classList.add('singlePokemon');
        pokemon.classList.add('nes-pointer');
        pokemon.innerHTML = `<img src="${pokedex[i]["frontImg"]}" alt="">`
        document.querySelector('#pokedexChoices').appendChild(pokemon);
        pokemon.addEventListener('click', displayPokemon)
    }
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonFrontImg = pokemon["sprites"]["front_default"];
    let pokemonBackImg = pokemon["sprites"]["back_default"]

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"];
    pokedex[num] = {"name": pokemonName, "frontImg": pokemonFrontImg, "types": pokemonType, "desc": pokemonDesc, "backImg": pokemonBackImg, };
}
export let chosenPokemon = []
function displayPokemon() {
    document.querySelector('#pokedexImage').innerHTML = `<img src="${pokedex[this.id]["frontImg"]}" alt="">`;
    document.querySelector('#pokedexDescription').innerText = `${pokedex[this.id]["name"]}\n\n${pokedex[this.id]["desc"]}`;
    chosenPokemon = [];
    chosenPokemon.push(pokedex[this.id]["backImg"]);
    console.log(chosenPokemon);
    chosen = true
    console.log(chosen);
}

confirmBtn.addEventListener('click', () => {
    if (chosen == false){
        console.log(chosenPokemon);
        return 0
    } else {
        document.querySelector('#pokedex').style.display = 'none'
        document.querySelector('#game').style.display = 'flex'
        document.querySelector('.myPokemonDiv').innerHTML = `<img src="${chosenPokemon[0]}" alt="">`;
        document.querySelector('.ennemyPokemonDiv').innerHTML = `<img src="${pokedex[getRandomInt(1,151)]["frontImg"]}" alt="">`;
        chosenPokemon = [];
        chosen = false
    }
})

setupMenu();