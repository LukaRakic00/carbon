const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Garancija = require('./models/Garancija');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();
const uploadFolder = path.join(__dirname, '..', 'uploads');

app.use(express.json());
app.use(cors());

// Kreiraj uploads folder ako ne postoji
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'garancije',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    transformation: [{ width: 1200, height: 1200, crop: 'limit' }]
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
    data.invoiceFile = req.file.path; // Cloudinary URL

    console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME);
    console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY);
    console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? '***' : 'NOT SET');
    console.log('POST /api/garancije', {
      body: req.body,
      file: req.file
    });

    const garancija = new Garancija(data);
    await garancija.save();
    res.status(201).json({ message: 'Uspešno sačuvano!', imageUrl: data.invoiceFile });
  } catch (err) {
    // Loguj sve moguće informacije o grešci
    console.error('FULL ERROR:', err);
    if (err instanceof Error) {
      console.error('Error message:', err.message);
      console.error('Error stack:', err.stack);
    }
    // Loguj sve property-je objekta
    for (const key in err) {
      if (Object.prototype.hasOwnProperty.call(err, key)) {
        console.error(`err[${key}]:`, err[key]);
      }
    }
    // Loguj kao string
    try {
      console.error('Stringified error:', JSON.stringify(err, Object.getOwnPropertyNames(err)));
    } catch (e) {
      console.error('Error stringifying:', e);
    }
    res.status(500).json({
      error: err.message,
      stack: err.stack,
      full: err,
      stringified: (() => { try { return JSON.stringify(err, Object.getOwnPropertyNames(err)); } catch { return 'Cannot stringify'; } })()
    });
  }
});

app.listen(5000, () => {
  console.log('Server radi na portu 5000');
});