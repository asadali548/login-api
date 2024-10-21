const express = require('express');
const app = express();
const PORT = 3030;

// Middleware to parse JSON bodies
app.use(express.json());

// Array of users
let users = [
    { email: 'ali11@gmail.com', password: 'password1' },
    { email: 'ahmad256@gmail.com', password: 'password2' },
    { email: 'ahsan6@gmail.com', password: 'password3' },
    { email: 'asad008@gmail.com', password: 'password4' }
];

// POST endpoint for logging in
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists and password matches
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.status(200).json({ message: 'User logged in successfully' });
    } else {
        res.status(401).json({ message: 'Error: Not logged in' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
