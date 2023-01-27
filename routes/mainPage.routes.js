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
    // console.log(xx, '--------------------------------');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Photo.destroy({ where: { album_id: Number(id) } });
    const result1 = await Album.destroy({ where: { id: Number(id) } });
    res.json({ status: true });
  } catch (error) {
    console.log(error.message);
  }
});

// router.delete('/:id', async (req, res) => {
//   const xx = await Entry.destroy({ where: { id: req.params.id } });
//   res.json({ key: xx });
// });

router.get('/photos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const photos = await Photo.findAll({ where: { album_id: +id }, raw: true });
    res.renderComponent(Photos, { photos });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
