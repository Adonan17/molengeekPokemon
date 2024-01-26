export let letsPlayBtn = document.querySelector('#letsPlayBtn');
export let pokedex = document.querySelector('#pokedex');

export function setupMenu(){
    letsPlayBtn.addEventListener('click', () =>{
        letsPlayBtn.style.display = 'none'
        pokedex.style.display = 'flex'
    })


}
    