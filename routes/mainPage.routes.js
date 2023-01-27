const router = require('express').Router();
const Main = require('../view/Main');
const Photos = require('../view/Photos');

const { User, Album, Photo } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll({
      include: {
        model: Photo,
        attributes: ['album_id', 'photo'],
        key: 'album_id',
        raw: true,
      },
    }, { raw: true });
    console.log(albums, '++++++++++');
    // res.end()
    res.renderComponent(Main, { title: 'All ALbums', albums });
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

module.exports = router;
