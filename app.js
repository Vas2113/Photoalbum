require('@babel/register');
const express = require('express');
const configApp = require('./config/serverConfig');

const app = express();

const PORT = 3000;

configApp(app);

const authRoutes = require('./routes/authPage.routes');
const mainPage = require('./routes/mainPage.routes');
const myAlbumsPage = require('./routes/myAlbums.routes');

app.use('/', authRoutes); // start
app.use('/main', mainPage); // все альбомы !!!!
app.use('/myAlbums', myAlbumsPage);

app.listen(PORT, () => {
  console.log(`Порт ЗАПУЩЕН!!! ${PORT}`);
});
