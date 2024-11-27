const express = require("express");
const router = express.Router();
const housingController = require("../controllers/controllerHousing");

// Route untuk mendapatkan semua housing
router.get("/", housingController.Index);

// Route untuk mendapatkan housing berdasarkan ID
router.get("/:id", housingController.GetHousingById);  // Menambahkan route baru untuk ID

module.exports = router;
