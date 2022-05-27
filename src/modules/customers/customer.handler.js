const httpStatus = require('http-status');
const Service = require('./customer.service');

exports.store = async (req, res) => {
  try {
    const customer = await Service.store(req.body);

    return res.status(httpStatus.CREATED).json(customer);
  } catch (e) {
    return res.status(httpStatus.BAD_REQUEST).json(e);
  }
};

exports.getAll = async (req, res) => {
  try {
    const customers = await Service.getAll();

    return res.json({
      status: httpStatus.OK,
      data: customers,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Service.getOne(id);

    if (!customer) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        error: 'Customer not found',
      });
    }

    return res.json({
      status: httpStatus.OK,
      data: customer,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Service.getOne(id);

    if (!customer) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        error: 'Customer not found',
      });
    }

    await Service.update(id, req.body);

    return res.json({
      status: httpStatus.OK,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Service.getOne(id);

    if (!customer) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        error: 'Customer not found',
      });
    }

    await Service.destroy(id);

    return res.json({
      status: httpStatus.OK,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};
