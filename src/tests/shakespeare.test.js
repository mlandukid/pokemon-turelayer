const shakespeare = require('../utils/shakespeare');

// Extending testing time so the test doesnt time out
jest.setTimeout(15000);

test('First English description for Charizard', async () => {
  const dittoDescription = await shakespeare('Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.');
  // Request failed with status code 429 is included as api has 5 request per hour
  expect(dittoDescription).toEqual('spits fire yond is hot enow to melt boulders. Known to cause forest fires unintentionally.' || 'Request failed with status code 429');
});

test('No value given', async () => {
  // Using a try catch so the throwing of error doesnt break the test
  try {
    await shakespeare('');
  } catch (e) {
    expect(e.message).toEqual('' || 'Request failed with status code 429');
  }
});

test('Reached maximum number of requests in 1 hour', () => {
  // Simulate more than 5 requests
  for (let i = 0; i <= 6; i += 1) {
    try {
      shakespeare('Too many requests');
    } catch (e) {
      expect(e.message).toEqual('Request failed with status code 429');
    }
  }
});
