const { Customer } = require('../../../database/models');

exports.getAll = async () => {
  const customers = await Customer
    .findAll({
      include: [],
      order: [
        ['createdAt', 'DESC'],
      ],
    });

  return customers;
};

exports.getOne = async (id) => {
  const customer = await Customer
    .findOne({
      where: {
        id,
      },
    });

  return customer;
};

exports.store = async (data) => {
  const customer = await Customer.create(data);

  return customer;
};

exports.update = async (id, data) => {
  const customer = await Customer
    .update(data, {
      where: {
        id,
      },
    });

  return customer;
};

exports.destroy = async (id) => {
  const customer = await Customer
    .destroy({
      where: {
        id,
      },
    });

  return customer;
};
