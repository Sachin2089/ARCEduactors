const mongoose = require('mongoose');

// fetch data from .env 
require('dotenv').config();

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL, {
    })
    .then(()=>{console.log("Db Connection successful")})
    .catch((err)=>{
        console.log("Unsucssful conection");
        console.error(err);
        process.exit(1);
    });

    
}

module.exports = connect;


