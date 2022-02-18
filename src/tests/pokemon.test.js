const pokemon = require('../utils/pokemon');

test('First English description of Ditto', async () => {
  const dittoDescription = await pokemon('ditto');
  expect(dittoDescription).toEqual('It can freely recombine its own cellular structure to transform into other life-forms.');
});

test('Pokemon name spelt wrong', async () => {
  try {
    await pokemon('dittoo');
  } catch (e) {
    expect(e.message).toEqual('dittoo Not Found');
  }
});
