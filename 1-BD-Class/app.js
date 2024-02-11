
//// Server Instanciation
const express = require('express');
const app = express();

///// used to parse req.body in express -->> post & put
const bodyParser = require('body-parser');

//// specifically parse JSON data & add it to the request.body
app.use(bodyParser.json());


///// Activate Server on port no 3000
app.listen(3000, () => {
    console.log("Server started at port no: 3000");
});


///// ROutes
app.get('/', (request, response) => {
    response.send("Hello Ji, Kaise ho Sarre");
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully!!!")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    (res) => {
        console.log("Db Connected Successfully")
    },
).catch(
    (err) => {
        console.error("Received Error")
    }
)