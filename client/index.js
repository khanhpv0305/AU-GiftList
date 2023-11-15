const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const merkleTree = new MerkleTree(niceList);

async function main() {
  const randomIndex = Math.floor(Math.random() * niceList.length);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: niceList[randomIndex],
    proof: merkleTree.getProof(randomIndex)
  });

  console.log({ gift });
}

main();