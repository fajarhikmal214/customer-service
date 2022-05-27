/* eslint-disable no-undef */
const Service = require('./customer.service');

const mockCustomer = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  phone: '+1-555-555-5555',
};

// Seed the database
beforeAll(async () => {
  await Service.store(mockCustomer);
});

describe('Customer Service', () => {
  test('should be able to get all customers', async () => {
    const customers = await Service.getAll();
    expect(customers[0]).toHaveProperty('id');
  });

  test('should be able to store a customer', async () => {
    const customer = await Service.store(mockCustomer);
    expect(customer).toHaveProperty('id');
  });

  test('should be able to get a customer by id', async () => {
    const customers = await Service.getAll();
    const customer = await Service.getOne(customers[0].id);

    expect(customer).toHaveProperty('id');
  });

  test('should be able to update a customer', async () => {
    const customers = await Service.getAll();
    const customer = await Service.update(customers[0].id, mockCustomer);

    expect(customer).toEqual([1]);
  });

  test('should be able to delete a customer', async () => {
    const customers = await Service.getAll();
    const customer = await Service.destroy(customers[0].id);

    expect(customer).toEqual(1);
  });
});
