// authMicroserviceJWT.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;
const SECRET_KEY = 'Secret@123'; // Deberías almacenar esto de manera segura

app.use(bodyParser.json());

app.post('/generate-token', (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'UserId is required' });
  }

  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Auth Microservice with JWT running on port ${PORT}`);
});
