var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

// Updated for Bali tour packages
router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    { 'nama': 'Eksplorasi Pantai Bali', 'harga': 3000000 },
    { 'nama': 'Heritage Bali', 'harga': 2800000 },
    { 'nama': 'Petualangan Ubud', 'harga': 5000000 },
    { 'nama': 'Kuliner Bali', 'harga': 4500000 },
    { 'nama': 'Wisata Keluarga Bali', 'harga': 3500000 },
    { 'nama': 'Bali Adventure', 'harga': 4000000 }
  ];
  res.render('paketwisata', {
    title: 'Paket Wisata Bali', 
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
  const { namaLengkap, nomorTelepon, email, alamat, paketWisata, tanggalKeberangkatan, jumlahPeserta, preferensiMakanan, metodePembayaran } = req.body;

  // Calculate total price based on the selected package and number of participants
  const paketHarga = {
    'Paket Eksplorasi Pantai - Bali': 3000000,
    'Paket Heritage Bali - Bali': 2800000,
    'Paket Petualangan Ubud - Bali': 5000000,
    'Paket Kuliner Bali - Bali': 4500000,
    'Paket Wisata Keluarga Bali - Bali': 3500000,
    'Paket Bali Adventure - Bali': 4000000
  };

  const hargaPaket = paketHarga[paketWisata];
  const hargaTotal = hargaPaket * jumlahPeserta;

  // Render the order detail page with the submitted data
  res.render('orderdetail', {
    title: 'Detail Pemesanan Paket',
    orderDetails: {
      namaLengkap,
      nomorTelepon,
      email,
      alamat,
      paketWisata,
      tanggalKeberangkatan,
      jumlahPeserta,
      preferensiMakanan,
      metodePembayaran,
      hargaTotal
    }
  });
});

module.exports = router;
