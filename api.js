'use strict';

// method 1
// fetch('https://pokeapi.co/api/v2/pokemon/pokemon')
// .then(response => {
//   console.log('reached in then 1');
//   if(!response.ok){
//     throw new Error('Could not fetch resource')
//   }
//   return response.json()
// })
// .then(data => {
//   console.log('reached in then 2');
//   console.log(data.name);
// })
// .catch(error => {
//   console.log('reached in catch');
//   console.error('Error:', error);
// })

// method 2
async function fetchData(){
  try{
    // get the pokemon's name and fetch data for it
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    // if the response is not ok, throw an error
    if(!response.ok){
      throw new Error('Could not fetch resource')
    }

    // get the pokemon's image and display it
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite');
    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
  }
  catch(error){
    console.error('Error:', error);
  }
}

