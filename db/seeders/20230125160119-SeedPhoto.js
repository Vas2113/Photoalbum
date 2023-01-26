/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const photo = [
      {
        photoname: 'KGBT',
        photo:
          'https://i1.mybook.io/p/x756/book_covers/85/65/8565f9aa-1fbb-49f9-9e16-43a7ff324b9a.jpg',
        album_id: 1,
      },
      {
        photoname: 'Однажды в Голливуде',
        photo:
          'https://i2.mybook.io/p/x756/book_covers/e8/a2/e8a2bc52-06db-449a-adba-c431468bc6cf.jpg',
        album_id: 1,
      },
      {
        photoname: 'Фабрика прозы: записки наладчика',
        photo:
          'https://i3.mybook.io/p/x756/book_covers/fc/08/fc08da6c-4f87-4311-bc3a-d192f0f7fc47.jpg',
        album_id: 2,
      },
      {
        photoname: 'Галлант',
        photo:
          'https://i2.mybook.io/p/x756/book_covers/1a/4a/1a4aad47-5f95-4dc5-bdbd-3499c3d12e27.jpg',
        album_id: 2,
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
