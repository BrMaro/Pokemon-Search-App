const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const weightDiv = document.getElementById('weight');
const heightDiv = document.getElementById('height');
const typesDiv = document.getElementById('types');
const hpDiv = document.getElementById('hp');
const attackDiv = document.getElementById('attack');
const defenseDiv = document.getElementById('defense');
const specialAttackDiv = document.getElementById('special-attack')
const specialDefenseDiv = document.getElementById('special-defense');
const speedDiv = document.getElementById('speed');

const PokeApiUrl = 'https://pokeapi-proxy.freecodecamp.rocks/api/'

searchButton.addEventListener('click',()=>{
    fetch(PokeApiUrl+searchInput.value)
        .then(response => response.json())

        .catch(()=>alert("Pokemon not found"))
});