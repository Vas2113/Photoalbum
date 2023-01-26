const router = require('express').Router();
const Main = require('../view/Main');

const { User, Album } = require('../db/models');

router.get('/', async (req, res) => {
  let user;
  try {
    if (req.session.user_id) {
      user = await User.findOne({ where: { id: req.session.user_id } });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(user);
  res.renderComponent(Main, { title: 'All ALbums', user });
});

module.exports = router;
