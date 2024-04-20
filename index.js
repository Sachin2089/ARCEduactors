const express = require("express");
const app = new express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware

const connect = require("./config/database");
connect();
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));


const dahanuRouter = require("./routes/dahanu"); // Change variable name to dahanuRouter
const sandhanRouter = require('./routes/sandhan');
const puneRouter = require('./routes/pune');
const kutchRouter = require('./routes/kutch');
const rajasthanRouter = require('./routes/Rajasthan');
const spitiRouter = require('./routes/spiti');
const ladakhRouter = require('./routes/ladakh');
const EmailSubscribe = require('./routes/email')
app.use("/api/v1", dahanuRouter); // Use dahanuRouter here // mounting
app.use("/api/v1", sandhanRouter); 
app.use("/api/v1", puneRouter); 
app.use("/api/v1", kutchRouter); 
app.use("/api/v1", rajasthanRouter); 
app.use("/api/v1", spitiRouter); 
app.use("/api/v1", ladakhRouter);
app.use("/api/v1", EmailSubscribe) 

app.get("/", (req, res) => {
    const htmlContent = `<h1>Backend is Running</h1>`;
    res.send(htmlContent);
});


// server start
app.listen(PORT, (req, res) => {
    console.log("Server is running on port ", PORT);
});
