/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const photo = [
      {
        photoname: "Закат1",
        photo:
          "https://img.freepik.com/free-vector/tropical-landscape-with-ocean-and-sunset_107791-2244.jpg",
        album_id: 1,
      },
      {
        photoname: "Закат2",
        photo: "https://beautifoto.ru/wp-content/uploads/2019/08/1.jpg",
        album_id: 1,
      },
      {
        photoname: "Закат3",
        photo:
          "https://blocknotfotografa.ru/wp-content/uploads/2017/10/6694.jpg",
        album_id: 1,
      },
      {
        photoname: "Горы",
        photo:
          "https://phonoteka.org/uploads/posts/2021-04/1617804979_9-p-gori-fon-9.jpg",
        album_id: 2,
      },
      {
        photoname: "Море",
        photo:
          "https://sochi.scapp.ru/wp-content/uploads/post/2020/01/black-sea_obl.jpg",
        album_id: 3,
      },
      {
        photoname: "Пляж",
        photo:
          "https://kuku.travel/wp-content/uploads/2017/12/saloniki-more-plyazhi-i-kurorty-ryadom-5.jpg",
        album_id: 4,
      },
      {
        photoname: "Пляж",
        photo: "https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg",
        album_id: 4,
      },
      {
        photoname: "Игры",
        photo:
          "https://i2.mybook.io/p/x756/book_covers/1a/4a/1a4aad47-5f95-4dc5-bdbd-3499c3d12e27.jpg",
        album_id: 5,
      },
      {
        photoname: "Игры",
        photo:
          "https://img1.akspic.ru/previews/6/8/5/8/6/168586/168586-pabg_silverbek-pubg-playstation_5-playstation_4-igrushka-500x.jpg",
        album_id: 5,
      },
      {
        photoname: "Игры",
        photo:
          "https://img1.akspic.ru/previews/6/8/5/8/6/168586/168586-pabg_silverbek-pubg-playstation_5-playstation_4-igrushka-500x.jpg",
        album_id: 5,
      },
      {
        photoname: "Галлант",
        photo: "https://ichip.ru/blobimgs/uploads/2019/06/surf.jpg",
        album_id: 5,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 6,
      },
      {
        photoname: "Небо",
        photo:
          "https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg",
        album_id: 7,
      },
      {
        photoname: "Небо",
        photo:
          "https://i2.mybook.io/p/x756/book_covers/1a/4a/1a4aad47-5f95-4dc5-bdbd-3499c3d12e27.jpg",
        album_id: 7,
      },
      {
        photoname: "Галлант",
        photo:
          "https://i2.mybook.io/p/x756/book_covers/1a/4a/1a4aad47-5f95-4dc5-bdbd-3499c3d12e27.jpg",
        album_id: 7,
      },
      {
        photoname: "Галлант",
        photo:
          "https://i2.mybook.io/p/x756/book_covers/1a/4a/1a4aad47-5f95-4dc5-bdbd-3499c3d12e27.jpg",
        album_id: 7,
      },
    ];
    const addTimeStamps = (item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert("Photos", photo.map(addTimeStamps));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Photos");
  },
};
