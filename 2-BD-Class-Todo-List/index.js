const express = require('express');
const app = express();

//// load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//// middleware to parse json request body
app.use(express.json());

//// import routes for Todo API
const todoRoutes = require("./routes/todoRoutes");

/// mount the todo API
app.use("/api/v1", todoRoutes);

/// start the serve
app.listen(PORT, () => {
    console.log(`Server is started at Port: ${PORT}`);
});


//// DB Connection
const dbConnect = require("./config/database");
dbConnect();

//// Default ROute
app.get("/", (req, res) => {
    res.send('<h1> This is Home Page Of TODO LIST </h1>');
})