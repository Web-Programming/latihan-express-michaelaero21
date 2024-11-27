const Register = require("../models/register");

const Insert = (req, res, next) => {
    const register = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });
  
    register
    .save()
    .then((result) => {
        const responseMessage = result;
        res.status(200).json(responseMessage);
    })
    .catch((e) => {
        const responseMessage = {
            code: 400,
            success: true,
            message: e
        };
        res.status(400).json(responseMessage);
    });
};

module.exports = { Insert }