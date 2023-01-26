const router = require('express').Router();
const bcrypt = require('bcrypt');
const Start = require('../view/Start');
const Log = require('../view/Log');
const Reg = require('../view/Reg');

const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Start);
});

router.get('/reg', (req, res) => {
  res.renderComponent(Reg);
});

router.post('/reg', async (req, res) => {
  const {
    login, email, password1, passwordRepeat,
  } = req.body;
  let user;
  try {
    if (!login || !email || !password1 || !passwordRepeat) {
      return res.status(400).json({ message: 'Необходимо заполнить все поля', status: false });
    }
    if (password1 !== passwordRepeat) {
      return res
        .status(400)
        .json({ message: 'Пароли не совпадают :(', status: false });
    }
    user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ message: 'Пользователь с таким e-mail уже зарегистрирован!', status: false });
    }

    const password = await bcrypt.hash(password1, 10);
    const newUser = await User.create({
      login, email, password,
    });

    req.session.user_id = newUser.id;
    res.status(201).json({ message: 'success', status: true });
  } catch (e) {
    res.json({ message: e.message });
  }
});

router.get('/log', (req, res) => {
  res.renderComponent(Log);
});

router.post('/log', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Необходимо заполнить все поля', status: false });
    }
    const logUser = await User.findOne({ where: { email } });
    const validPassword = await bcrypt.compare(password, logUser.password);
    if (logUser) {
      if (validPassword) {
        req.session.user_id = logUser.id;
        return res.json({ status: 'succes', url: '/' });
      }
      return res
        .status(400)
        .json({ message: 'Неверный пароль :(', status: false });
    }
    return res.status(404).json({ status: false, message: 'Неправильный адрес электронной почты :(' });
  } catch (error) {
    console.log(error.message);
  }
});

router.route('/logout').get((req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка удаления сессии' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
