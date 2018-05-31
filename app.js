const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());
app.get('/', async (req, res) => {
    res.send(
        {
            somePayload: "Hallo Raumschiff"
        }
    );

});

app.listen(PORT, HOST);