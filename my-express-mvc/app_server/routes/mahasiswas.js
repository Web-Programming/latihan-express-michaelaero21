const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");
//Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/mahasiswa", mahasiswaController.index);
router.post("/mahasiswa/insert", mahasiswaController.insert);
module.exports = router;