export let letsPlayBtn = document.querySelector('#startMenuBtn');
export let pokedex = document.querySelector('#pokedex');

export function setupMenu(){
    letsPlayBtn.addEventListener('click', () =>{
        document.querySelector('#startGame').style.display = 'none';
        pokedex.style.display = 'flex';
    })
}