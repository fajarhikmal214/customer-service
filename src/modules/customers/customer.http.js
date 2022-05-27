const { Router } = require('express');
const Handler = require('./customer.handler');

const router = Router();

// Create a new customer
router.post('/api/v1/customers', Handler.store);

// Retrieve all customers
router.get('/api/v1/customers', Handler.getAll);

// Retrieve a single customer with id
router.get('/api/v1/customers/:id', Handler.getOne);

// Update a customer with id
router.put('/api/v1/customers/:id', Handler.update);

// Delete a customer with id
router.delete('/api/v1/customers/:id', Handler.destroy);

module.exports = router;
