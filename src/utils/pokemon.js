const axios = require('axios');

const pokemon = async (pokemonName) => {
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  try {
    // Request to get the species URL from name
    const speciesUrl = await axios.get(`${pokeUrl}/${pokemonName}`);
    // Get array of pokemon descriptions
    const speciesDescriptions = await axios.get(speciesUrl.data.species.url);

    let firstEnglishDescription;
    // Loop over objects and return first object where language is English
    for (let i = 0; i < speciesDescriptions.data.flavor_text_entries.length; i += 1) {
      if (speciesDescriptions.data.flavor_text_entries[i].language.name === 'en') {
        // Assign Pokemon description to variable and break out of loop
        firstEnglishDescription = speciesDescriptions.data.flavor_text_entries[i].flavor_text;
        // Early return to break out
        return firstEnglishDescription.replace(/\n|\f|\/|\"/g, ' ');
      }
    }
  } catch (e) {
    throw new Error(`${pokemonName} ${e.response.statusText}`);
  }
};

module.exports = pokemon;
