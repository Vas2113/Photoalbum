/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const albums = [
      {
        title: 'Animals',
        // body: '',
        status: true,
        user_id: 1,
      },
      {
        title: 'Food',
        // body: 'А тут?',
        status: true,
        user_id: 1,
      },
      {
        title: 'People',
        // body: '',
        status: true,
        user_id: 1,
      },
      {
        title: 'Travel',
        // body: '',
        status: true,
        user_id: 2,
      },
      {
        title: 'Work',
        // body: '',
        status: true,
        user_id: 2,
      },
    ];

    const addTimeStamps = (item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert('Albums', albums.map(addTimeStamps));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Albums');
  },
};
