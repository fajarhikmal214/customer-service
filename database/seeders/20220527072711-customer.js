module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Customers', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      phone: '+1-555-555-5555',
    }, {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@gmail.com',
      phone: '+1-555-555-5555',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
