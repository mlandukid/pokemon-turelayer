const pokemonForm = document.querySelector('form');
const search = document.querySelector('input');

const pokemonName = document.querySelector('#name');
const pokemonDescription = document.querySelector('#description');

pokemonForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Use pokemon route to get description to display
  fetch(`/pokemon/${search.value}`).then((response) => {
    response.json().then((data) => {
      pokemonName.textContent = '';
      pokemonDescription.textContent = '';
      if (data.error) {
        // Display error if error occurs
        pokemonName.textContent = `${data.error}`;
      } else {
        // Otherwise display the Pokemon name and description
        pokemonName.textContent = `Name: ${data.requestedPokemon}`;
        pokemonDescription.textContent = `Description: ${data.shakespeareTranslated}`;
      }
    });
  });
});
