const router = require('express').Router();
const MyMain = require('../view/MyMain');
const Photos = require('../view/Photos');

const { User, Album, Photo } = require('../db/models');


router.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);

    const albums = await Album.findAll({
      where: { user_id: req.session.user_id },
      include: {
        model: Photo,
        attributes: ['album_id', 'photo'],
        key: 'album_id',
        raw: true,
      },
    }, { raw: true });
    res.renderComponent(MyMain, { title: 'All ALbums', albums });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/photos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const photos = await Photo.findAll({ where: { album_id: +id }, raw: true });
    res.renderComponent(Photos, { photos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// router.post('/', async (req, res) => {
//   try {
//     const { userId } = req.session;

//     const user = await User.findByPk(userId);

//     const { title, body, status } = req.body;
//     const newAlbum = await Album.create({
//       title, body, status, user_id: userId,
//     });
//     res.renderComponent(UserBook, { newAlbum });
//   } catch (e) {
//     res.text(e.message);
//   }
// });

module.exports = router;
