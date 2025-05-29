const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/upload-frame', (req, res) => {
  // Aquí luego pondrás la lógica para subir a Cloudinary, etc.
  res.json({ message: 'Subida recibida en backend' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor backend corriendo en puerto ${port}`);
});
