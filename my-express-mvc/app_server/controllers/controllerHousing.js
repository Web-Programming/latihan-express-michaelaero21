const Housing = require("../models/housing");

const Index = async(req, res) => {
    try {
        const housing = await Housing.find({});
        res.status(200).json(housing);
        if(!housing){
            res.status(404).json({message: "Collection is Empty"});
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
}

const Show = (req, res, next) => {
    const id = parseInt(req.params.id);
    Housing
        .findOne({id:(parseInt(req.params.id))})
        .then((housing) =>{
            const responseMessage = housing;
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
            };
            res.status(404).json(responseMessage);
        });
};

module.exports = { Index, Show }