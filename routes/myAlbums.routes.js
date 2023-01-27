const router = require('express').Router();
const storageFileupload = require('../addPhoto');
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

    const photos = await Photo.findAll({
      where: { album_id: +id },
      raw: true,
      include: {
        model: Album, key: 'album_id',
      },
    });
    res.renderComponent(Photos, { photos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/photos/addPhoto', async (req, res) => {
  const { id } = req.params;
  try {
    const file = req.files.homesImg;
    const arrUrl = await Promise.all(
      file.map(async (el) => await storageFileupload(el)),
    );
    const newUrl = await Promise.all(
      arrUrl.map(async (url) => await Photo.create({ album_id: id, photo: url, photoname: 'name' })),
    );

    res.json(newUrl);
  } catch (e) { console.log(e.message); }
});

module.exports = router;
