const Repository = require('./customer.repository');

exports.store = async (body) => {
  const customer = await Repository.store(body);
  return customer;
};

exports.getAll = async () => {
  const customers = await Repository.getAll();
  return customers;
};

exports.getOne = async (id) => {
  const customer = await Repository.getOne(id);
  return customer;
};

exports.update = async (id, body) => {
  const customer = await Repository.update(id, body);
  return customer;
};

exports.destroy = async (id) => {
  const customer = await Repository.destroy(id);
  return customer;
};
