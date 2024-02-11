const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATEBASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("DB Connection Success!!!"))
        .catch(err => {
            console.error("Error in DB Connection")
            console.error(err);
            process.exit(1);
        })
}

module.exports = dbConnect;