const { User } = require('../db/models');

// промежуточная функция для очистки куки при истёкшей сессии на сервере
const cookiesCleaner = (req, res, next) => {
  if (req.cookies.user_sid && !req.session.user_id) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    next();
  }
};

// промежуточная функция наполнения локальных переменных
const resLocals = (req, res, next) => {
  if (req.session.user_id) {
    res.locals.userId = req.session.user_id;
  }

  next();
};

// промежуточная функция поиска пользователя в БД по ID из сессии
const getUser = async (req, res, next) => {
  if (req.session.user_id) {
    const us = await User.findByPk(Number(req.session.user_id), { raw: true });
    res.app.locals.user = { id: us.id, name: us.login };
  }

  next();
};

module.exports = {
  cookiesCleaner, resLocals, getUser,
};
