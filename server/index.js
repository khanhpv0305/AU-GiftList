const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT = '9dfbf92b8b2c4f9907f3da5aaa098c4f25acf6e5b30040a79bf66a1595945c00';

app.post('/gift', (req, res) => {
  const { name, proof } = req.body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);

  if(isInTheList) {
    res.send(`Congratulations, ${name}. You got a toy robot!`);
  }
  else {
    res.send(`Sorry ${name}. You are not on the list :(`);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
