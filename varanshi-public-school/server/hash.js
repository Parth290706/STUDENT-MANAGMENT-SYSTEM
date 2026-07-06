const bcrypt = require("bcrypt");

const password = process.argv[2];

if (!password) {
  console.log("Usage: node hash.js <password>");
  process.exit();
}

bcrypt.hash(password, 10).then((hash) => {
  console.log(hash);
});