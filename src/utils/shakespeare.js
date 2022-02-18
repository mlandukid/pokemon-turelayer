const axios = require('axios');

const shakespeare = async (pokemonDescription) => {
  const translateUrl = 'https://api.funtranslations.com/translate/shakespeare.json?text=';

  try {
    // Request to obtain species URL from inputted name
    const translatedDescritpion = await axios.get(`${translateUrl}/${pokemonDescription.split('\n').join('')}`);
    // Request to obtain Pokemon description array and removing escaped characters
    const cleanDescription = translatedDescritpion.data.contents.translated.replace(/\\n|\\f|\/|\"/g, ' ');
    return cleanDescription.trim();
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = shakespeare;
