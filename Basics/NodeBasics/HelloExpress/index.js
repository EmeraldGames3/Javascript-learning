const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (request, response) => {
    fs.readFile('./home.html', 'utf-8', (err, data) => {
        if(err) {
            response.status(500).send('Some error occurred');
            return;
        }

        response.send(data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
