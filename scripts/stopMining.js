const client = require('./client');

// invoke "add"
client.request('soptMining', [], function (err, response) {
  if (err) throw err;
  console.log(response.result); // success!
});
