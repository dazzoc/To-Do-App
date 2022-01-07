// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

require('dotenv').config();
app.set('view engine', 'ejs');

// ===========================================================================
// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//============================================================================
// DATABASE CONNECTION ERROR/SUCESS
// Define callback functions for various events
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

//=============================================================================
// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//=============================================================================
// ROUTES

//=============================================================================
// LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listning on port: ${PORT}`));