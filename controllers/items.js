// DEPENDENCIES
const express = require('express');
const itemsRouter = express.Router(); 
const Item = require('../models/item');

//==========================================================
// ROUTES
// Index
itemsRouter.get('/', (req, res) => {
    res.send('HELLO')
    // Item.find({}, (error, allItems) => {
    //     res.render('index', {
    //         items: allItems,
    //     });
    // });
});

module.exports = itemsRouter;