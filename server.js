// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const itemsController = require('./controllers/items');

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
db.on("error", (err) => console.log(err.message + " is MONGO not running?"));
db.on("connected", () => console.log("MONGO Connected!"));
db.on("disconnected", () => console.log("MONGO Disconnected!"));

//=============================================================================
// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//=============================================================================
// ROUTES
app.get('/', (req, res) => res.redirect('/items'));
app.use('/items', itemsController);
app.get('/*', (req, res) => {
	res.render('pnf')
});

//=============================================================================
// LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listning on port: ${PORT}`));