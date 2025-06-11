const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Garancija = require('./models/Garancija');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const uploadFolder = path.join(__dirname, '..', 'uploads');

app.use(express.json());
app.use(cors());

// Kreiraj uploads folder ako ne postoji
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer storage za slike
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Povezivanje sa MongoDB
mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://devlukarakic:7c%23P2K39dQBhp!V@cluster0.fu4cybs.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Radi!');
});

// POST ruta sa validacijom i uploadom slike
app.post('/api/garancije', upload.single('invoiceFile'), async (req, res) => {
  try {
    const data = req.body;
    // Validacija: sva polja moraju biti popunjena
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'address', 'city',
      'productCategory', 'model', 'serialNumber', 'purchaseDate', 'retailer', 'invoiceNumber'
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ error: `Polje '${field}' je obavezno!` });
      }
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Morate izabrati fajl računa!' });
    }
    data.invoiceFile = req.file.filename;

    const garancija = new Garancija(data);
    await garancija.save();
    res.status(201).json({ message: 'Uspešno sačuvano!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server radi na portu 5000');
});