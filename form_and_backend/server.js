// This sets up body-parser to handle URL-encoded data.
// URL-encoded data is the format used by HTML forms by default.
// The { extended: true } option allows for rich objects and arrays to be encoded into the URL-encoded format.



// body-parser is what allows your server to understand and process the data sent in form submissions, making it a crucial component for handling user input in web applications.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Creates an instance of an Express application
app.use(bodyParser.urlencoded({ extended: true }));

// Defines a route handler for POST requests to '/submit
app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;
    
    console.log('Received form submission:', { name, email, password });

    // Sends a response back to the client
    res.send('Form submitted successfully!');
});

// Defines the port number for the server
const PORT = 3000;
// Starts the server and makes it listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
