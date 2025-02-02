
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000; 

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});