/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const albums = [
      {
        title: 'Gavai',
        body: 'Хотел бы тут жить?',
        status: true,
        user_id: 1,
      },
      {
        title: 'Mosco',
        body: 'А тут?',
        status: false,
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
