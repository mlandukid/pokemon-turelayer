const path = require('path');
const express = require('express');
const hbs = require('hbs');
const pokemon = require('./utils/pokemon');
const shakespeare = require('./utils/shakespeare');

const app = express();
const port = process.env.PORT || 5000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Home Directory
app.get('', (req, res) => {
  res.render('index', {
    title: 'Gotta Catch Em All',
    name: 'Loyiso they Mlandu',
  });
});

// Pokemon Directory
app.get('/pokemon/:pokemon', async (req, res) => {
  const requestedPokemon = req.params.pokemon;

  if (!requestedPokemon) {
    return res.send({
      error: 'You must provide a Pokemon name',
    });
  }

  try {
    // Get the description of the Pokemon
    const pokemonData = await pokemon(requestedPokemon);
    // Translating the description from English to Shakespearean
    const shakespeareTranslated = await shakespeare(pokemonData);

    res.send({
      requestedPokemon,
      shakespeareTranslated,
    });
  } catch (e) {
    res.send({ error: e.message });
  }
});

// Unknown Directory Error Page
app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Page',
    errorMessage: 'I think you are looking for /pokemon/<pokemon_name> e.g: http://localhost:5000/pokemon/eevee',
    name: 'Loyiso they Mlandu',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
