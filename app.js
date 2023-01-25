require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');
const configApp = require('./config/serverConfig');

const app = express();

const PORT = 3000;
configApp(app);

const authRoutes = require('./routes/authPage.routes');
const mainPage = require('./routes/mainPage.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoutes); // start
app.use('/main', mainPage);

app.listen(PORT, () => {
  console.log(`Порт ЗАПУЩЕН!!! ${PORT}`);
});
