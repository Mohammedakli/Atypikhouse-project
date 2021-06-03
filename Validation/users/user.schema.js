const joi = require("@hapi/joi");

//user params validation
 
const schema = {
    user : joi.object({
        pseudo: joi.string().pattern(new RegExp("[a-zA-ZşŞÇçÖöüÜıIiİĞğ]+")).max(100).required(),
        email : joi.string().email(),
        password : joi.string()./*pattern(new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$")).*/required(),
        tel : joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required(),
        role : joi.string().valid("client","propriétaire").required()

    })

};
module.exports = schema;