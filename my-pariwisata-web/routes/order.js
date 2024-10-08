// routes/order.js
app.get('/orderdetail', (req, res) => {
    // Cek apakah ada masalah di dalam controller ini
    try {
      const orderDetails = {
        namaLengkap: "John Doe",
        nomorTelepon: "08123456789",
        email: "john@example.com",
        alamat: "Jl. Merdeka No. 1",
        paketWisata: "Paket C - Bali",
        tanggalKeberangkatan: "2024-10-05",
        jumlahPeserta: 4,
        preferensiMakanan: "Halal",
        metodePembayaran: "Transfer Bank"
      };
      
      res.render('orderdetail', { orderDetails });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan di server");
    }
  });
  