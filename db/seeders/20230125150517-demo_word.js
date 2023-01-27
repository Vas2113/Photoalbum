const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const rawPassword1 = '12345678';
    const rawPassword2 = '87654321';
    const hashedPassword1 = await bcrypt.hash(rawPassword1, 10);
    const hashedPassword2 = await bcrypt.hash(rawPassword2, 10);

    const user = [
      {
        login: 'testUser',
        email: 'test@gmail.ru',
        password: hashedPassword1,
      },
      {
        login: 'Pavel',
        email: 'tema@gmail.ru',
        password: hashedPassword2,
      },
    ];

    const addTimeStamps = (item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert('Users', user.map(addTimeStamps));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
