const express = require('express');
const cors = require('cors');
const config = require('./config/app');
const corsOptions = require('./config/cors');
const customer = require('./modules/customers/customer.http');

const app = express();
const PORT = config.get('port', 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use(customer);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
