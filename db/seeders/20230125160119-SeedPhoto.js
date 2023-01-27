/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const photo = [
      {
        photoname: "animals",
        photo: "/img/animals/brian-breeden-8fkZZw0aWkQ-unsplash.jpg",
        album_id: 1,
      },
      {
        photoname: "ное",
        photo: "/img/animals/brian-breeden-BzT3VYs8itc-unsplash.jpg",
        album_id: 1,
      },
      {
        photoname: "ИтутЖивотное",
        photo: "/img/animals/daniel-pelaez-duque-MYzx-jVQ0ek-unsplash.jpg",
        album_id: 1,
      },
      {
        photoname: "ОпятьЖивотное",
        photo: "/img/animals/daniel-perunov-EgYXCRk_Siw-unsplash.jpg",
        album_id: 1,
      },
      {
        photoname: "Животное",
        photo: "/img/animals/jason-leung-Tb-Uj59U45U-unsplash.jpg",
        album_id: 1,
      },
      {
        photoname: "Животное",
        photo: "/img/animals/tony-litvyak-Wc_nye0Vrmc-unsplash.jpg",
        album_id: 1,
      },
      {
        photoname: "eat",
        photo: "/img/eat/immo-wegmann-Q5Sm5-UGLiQ-unsplash.jpg",
        album_id: 2,
      },
      {
        photoname: "eat!",
        photo: "/img/eat/krunal-lakhatariya-YrmZSEpN_jc-unsplash.jpg",
        album_id: 2,
      },
      {
        photoname: "eat?",
        photo: "/img/eat/laura-adai-EVpuANEtz4k-unsplash.jpg",
        album_id: 2,
      },
      {
        photoname: "eat",
        photo: "/img/eat/martin-baron-Z7crJXKsSps-unsplash.jpg",
        album_id: 2,
      },
      {
        photoname: "eattt",
        photo: "/img/eat/rossella-porta-TvxF-V4NHyM-unsplash.jpg",
        album_id: 2,
      },
      {
        photoname: "eatTtTt",
        photo: "/img/eat/winston-tjia-NnJE7rmtijA-unsplash.jpg",
        album_id: 2,
      },
      {
        photoname: "People",
        photo: "/img/people/nathan-dumlao-yMhi_YxDejw-unsplash.jpg",
        album_id: 3,
      },
      {
        photoname: "People",
        photo: "/img/people/nima-sarram-BwZikcZKx2Q-unsplash.jpg",
        album_id: 3,
      },
      {
        photoname: "People",
        photo: "/img/people/nima-sarram-h0KLS0X02CA-unsplash.jpg",
        album_id: 3,
      },
      {
        photoname: "People",
        photo: "/img/people/sandro-g-photography-DMYg_m0Acng-unsplash.jpg",
        album_id: 3,
      },
      {
        photoname: "People!",
        photo: "/img/people/sandro-g-photography-tUHtxr5zIvQ-unsplash.jpg",
        album_id: 3,
      },
      {
        photoname: "People?!",
        photo: "/img/people/sina-rezakhani-soI1MwIEOhQ-unsplash.jpg",
        album_id: 3,
      },
      {
        photoname: "Travel",
        photo: "/img/travel/andre-blanco-FwT-vpYCMmE-unsplash.jpg",
        album_id: 4,
      },
      {
        photoname: "Travel",
        photo: "/img/travel/armands-brants-QLv--jnWQj8-unsplash.jpg",
        album_id: 4,
      },
      {
        photoname: "Travel",
        photo: "/img/travel/artem-korolev-HIczs09rEFQ-unsplash.jpg",
        album_id: 4,
      },
      {
        photoname: "Travel",
        photo: "/img/travel/marina-lisova-65aV01f5zJM-unsplash.jpg",
        album_id: 4,
      },
      {
        photoname: "Travel",
        photo: "/img/travel/paul-bill-zoS5wX9UyLs-unsplash.jpg",
        album_id: 4,
      },
      {
        photoname: "Travel",
        photo: "/img/travel/wendi-stern-5DDmx8ebcq0-unsplash.jpg",
        album_id: 4,
      },
      {
        photoname: "Work",
        photo: "/img/work/andrei-stan-7lqVW2LKiak-unsplash.jpg",
        album_id: 5,
      },
      {
        photoname: "Work",
        photo: "/img/work/eric-dekker-zP4_qK9FEQA-unsplash.jpg",
        album_id: 5,
      },
      {
        photoname: "Work",
        photo: "/img/work/markus-spiske-T-t4SGE4aFY-unsplash.jpg",
        album_id: 5,
      },
      {
        photoname: "Work",
        photo: "/img/work/mina-rad-_D_IzxYaoJM-unsplash.jpg",
        album_id: 5,
      },
      {
        photoname: "Work",
        photo: "/img/work/mina-rad-hLIag4GDeTs-unsplash.jpg",
        album_id: 5,
      },
      {
        photoname: "Work",
        photo: "/img/work/mina-rad-IPvt-2u-joI-unsplash.jpg",
        album_id: 5,
      },
    ];
    const addTimeStamps = (item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert('Photos', photo.map(addTimeStamps));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos');
  },
};
