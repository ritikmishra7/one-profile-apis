const express = require('express');
const app = express();
const cheerio = require('cheerio');
const axios = require('axios');
const platformRoutes = require('./routes/platform.routes');


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api', platformRoutes);


const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));