require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');
// const configApp = require('./config/serverConfig');

const app = express();

const PORT = 3000;
// configApp(app);

// const mainRoute = require('./routes/mainRoute');
// const regRoute = require('./routes/regRoute');
// const logoutRoute = require('./routes/logoutRoute');
// const authRoutes = require('./routes/authRoutes');
// const pageRoutes = require('./routes/page.routes');
// const topicsRoutes = require('./routes/topicsRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', mainRoute);
// app.use('/reg', regRoute);
// app.use('/logout', logoutRoute);
// app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Порт ЗАПУЩЕН!!! ${PORT}`);
});
