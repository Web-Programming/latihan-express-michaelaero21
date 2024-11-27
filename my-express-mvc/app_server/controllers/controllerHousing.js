const Housing = require("../models/housing");

// Controller untuk mengambil semua housing
const Index = async (req, res) => {
    try {
        const housing = await Housing.find({});
        if (!housing || housing.length === 0) {
            return res.status(400).json({ message: "Collection is empty" });
        }
        res.status(200).json(housing);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving housing locations", error });
    }
};

// Controller untuk mengambil housing berdasarkan ID
const GetHousingById = async (req, res) => {
    const housingId = Number(req.params.id);  // Mengonversi ID menjadi Number jika idhousing di MongoDB bertipe Number

    try {
        const housing = await Housing.findOne({ idhousing: housingId });

        if (!housing) {
            return res.status(404).json({ message: "Housing location not found" });
        }

        res.status(200).json(housing);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving housing location", error });
    }
};


module.exports = { Index, GetHousingById };
