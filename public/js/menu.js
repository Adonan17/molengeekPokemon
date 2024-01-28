import { chosen, chosenPokemon, getRandomInt } from "./main.js";

export let letsPlayBtn = document.querySelector('#startMenuBtn');
export let pokedex = document.querySelector('#pokedex');
export let confirmBtn = document.querySelector('#confirmBtn')

export function setupMenu(){
    letsPlayBtn.addEventListener('click', () =>{
        document.querySelector('#startGame').style.display = 'none';
        pokedex.style.display = 'flex';
        console.log(chosen);
    })

    
}