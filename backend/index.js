const express = require('express');
const { connectsDb } = require('./database/dbConnection');
const app = express();
require('dotenv').config();
const port = process.env.PORT
const cors = require('cors');

connectsDb();
app.use(cors({
    origin:'http://localhost:4200'
}));
app.use(express.json());

app.use('/api/v1',require('./routes/apiV1.route'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 