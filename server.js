const { IS_DEV } = require('./utils/dev');
const express = require('express');
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

const PORT = IS_DEV ? 3000 : process.env.PORT;
// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log(`Your app is listening @ http://localhost:${PORT}`);
});
