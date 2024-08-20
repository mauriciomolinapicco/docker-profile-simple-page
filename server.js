const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

let user = {
    name: 'John Doe',
    email: 'john.doe@example.com'  
}

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

//serve html
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'))
});

app.get('/edit-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'edit-profile.html'))
});

app.post('/edit-profile', (req, res) => {
    const {name, email} = req.body;
    console.log(`Received data: Name = ${name}, Email = ${email}`); // Add this line

    user = {name, email};
    res.redirect('/profile');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  