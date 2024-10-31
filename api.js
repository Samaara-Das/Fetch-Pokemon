'use strict';

async function fetchData(){
  // Clear any previous error messages and hide previous pokemon
  clearPreviousResults();
  
  try{
    // get the pokemon's name and fetch data for it
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    // if the response is not ok, throw an error
    if(!response.ok){
      throw new Error(`Pokemon "${pokemonName}" not found!`);
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
    // Display error message to user
    displayErrorMessage(error.message);
  }
}

function clearPreviousResults() {
  const errorElement = document.getElementById('errorMessage');
  errorElement.textContent = '';
  document.getElementById('pokemonSprite').style.display = 'none';
}

function displayErrorMessage(message) {
  const errorElement = document.getElementById('errorMessage');
  errorElement.textContent = error.message;
}
