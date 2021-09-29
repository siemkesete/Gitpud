// require our dependencies
require('dotenv').config();
const express = require('express');
const drinks = require('./models/drinks');


//Initialize the express app
const app = express();

// Get Route to Welcome Page
app.get('/', (req, res, next) => {
res.send(`
<h1>Welcome to the Gitpub App!</h1>
`);
});

//Get Route to Welcome Page 
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        drinks: drinks,
    });
    });

//Get Route to Welcome Page 
app.get('/drinks', (req, res) => {
    res.render('drinks_show.ejs', {
        drinks: drinks[req.params.id],
    });
    });

// tell app to listen
const port = process.abort.env.PORT || 3001;


// tell the app to listen on port 3000 for requests from the client

const port = process.env.PORT;


// use it to store environment variable

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
}); 