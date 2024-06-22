const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const imgDiv = document .getElementById('img-container')
const pokemonNameDiv = document.getElementById('pokemon-name');
const pokemonIdDiv = document.getElementById('pokemon-id')
const weightDiv = document.getElementById('weight');
const heightDiv = document.getElementById('height');
const typesDiv = document.getElementById('types');
const hpDiv = document.getElementById('hp');
const attackDiv = document.getElementById('attack');
const defenseDiv = document.getElementById('defense');
const specialAttackDiv = document.getElementById('special-attack')
const specialDefenseDiv = document.getElementById('special-defense');
const speedDiv = document.getElementById('speed');

let pokemonDataArr;


const cleanPokemonNamesInput = (name) => {
    name = name.toLowerCase().replace(/♀/g, '-f').replace(/♂/g, '-m').replace(" ","-");
    return name.replace(/[^a-z0-9-]/g,"")
};


searchButton.addEventListener('click',()=>{
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${cleanPokemonNamesInput(searchInput.value)}`)
        .then(response => response.json())
        .then(data => {
            pokemonDataArr = data;
            console.log(pokemonDataArr);
            displayPokemonData();
        })

        .catch((err)=>{
            alert("Pokemon not found");
            pokemonNameDiv.textContent = `Error: ${err}`;
        });
});


const displayPokemonData = () => {
    typesDiv.innerHTML = "";
    const { name, id, weight, height, stats, sprites, types } = pokemonDataArr;
    const baseStats = stats.map(stat => stat.base_stat);
    const typeTexts = types.map(type_slot => type_slot.type.name.toUpperCase());
    imgDiv.innerHTML = `
        <img id='sprite' src='${sprites.front_default}'>
    `;

    pokemonNameDiv.textContent = name.toUpperCase();
    pokemonIdDiv.textContent = id;
    weightDiv.textContent = "Weight: " + weight;
    heightDiv.textContent = "Height: " + height;
    hpDiv.textContent = baseStats[0];
    attackDiv.textContent = baseStats[1];
    defenseDiv.textContent = baseStats[2];
    specialAttackDiv.textContent = baseStats[3];
    specialDefenseDiv.textContent = baseStats[4];
    speedDiv.textContent = baseStats[5];
    
    typeTexts.forEach(typeText => {
        typesDiv.innerHTML += `
        <span>${typeText}</span>
        `;
    })
}