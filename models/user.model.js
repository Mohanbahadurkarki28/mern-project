const{Schema, model} =require('mongoose');
const{stringRequired, boolTrue, modelConfig} = require('../lib/constant');

const User = model('User', new Schema({
    name: stringRequired,
    email:{
        ...stringRequired,
        unique: true,
    },
    password: stringRequired,
    phone:{
        ...stringRequired,
        maxlength: 20,
    },
    address: stringRequired,
    role:{
        type: String,
        enum:['Admin','Staff','Customer'],
        default:'Customer',
    },
    status: boolTrue,
}, modelConfig))
 
module.exports = User