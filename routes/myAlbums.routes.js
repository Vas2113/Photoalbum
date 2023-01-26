const router = require('express').Router();

const { User, Album } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const user = await User.findByPk(userId);
    const albums = await Album.findAll({ where: { user_id: userId } });
    const photos = await res.renderComponent(MyAlbums, { title: 'MyAlbums', albums });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId } = req.session;

    const user = await User.findByPk(userId);

    const { title, body, status } = req.body;
    const newAlbum = await Album.create({
      title, body, status, user_id: userId,
    });
    res.renderComponent(UserBook, { newAlbum });
  } catch (e) {
    res.text(e.message);
  }
});

module.exports = router;
