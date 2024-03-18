const express = require('express');
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/db');
connectDB()
const app = express();
const roledb = require('./Roledb');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/uploads', express.static('uploads'))

// app.use('/', require('./routes'))
app.post('/acl', (req, res) => {
    const { role, service, access } = req.body;
    const ans = roledb[role][service].includes(access)
    res.json(ans)
})
app.listen(8080, () => {
    console.log(`App is running on port 8080`);
});