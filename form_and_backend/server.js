const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;
    // Here you would typically process the data, e.g., save to a database
    console.log('Received form submission:', { name, email, password });
    res.send('Form submitted successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
