import { setupMenu } from "./menu.js";

const pokemonCount = 151;
var pokedex = {};

window.onload = async function() {
    getPokemon(1);

    // console.log(pokedex);
    for (let i = 1; i < pokemonCount; i++) {
        await getPokemon(i);
        let pokemon = document.createElement('div');
        pokemon.id = i;    
        pokemon.classList.add('singlePokemon');
        pokemon.classList.add('nes-pointer');
        pokemon.innerHTML = `<img src="${pokedex[i]["img"]}" alt="">`
        document.querySelector('#pokedexChoices').appendChild(pokemon);
        pokemon.addEventListener('click', displayPokemon)
    }
}



async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"];
    pokedex[num] = {"name": pokemonName, "img": pokemonImg, "types": pokemonType, "desc": pokemonDesc};
}
let chosenPokemon = []
function displayPokemon() {
    document.querySelector('#pokedexImage').innerHTML = `<img src="${pokedex[this.id]["img"]}" alt="">`;
    document.querySelector('#pokedexDescription').innerText = `${pokedex[this.id]["name"]}\n\n${pokedex[this.id]["desc"]}`;
    chosenPokemon = [];
    chosenPokemon.push(pokedex[this.id]["name"]);
    console.log(chosenPokemon);
}
setupMenu();