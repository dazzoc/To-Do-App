// DEPENDENCIES
const express = require('express');
const itemsRouter = express.Router(); 
const Item = require('../models/item');
const itemSeed = require('../models/itemSeed')

//==========================================================
// ROUTES
// Seed - Route
itemsRouter.get('/items/seed', (req, res) => {
    Item.deleteMany({}, (error, allItems) => {});
    Item.create(itemSeed, (error, data) => {
        res.redirect('/items');
    });
});

// Index - Route
itemsRouter.get('/', (req, res) => {
    //res.send('HELLO')
    Item.find({}, (error, allItems) => {
        res.render('index', {
            items: allItems,
        });
    });
});

// New - Route
itemsRouter.get('/new', (req, res) => {
    res.render('/new');
});

// Detele - Route

// Update - Route

// Create - Route
itemsRouter.post('/', (req, res) => {
    Item.create(req.body, (error, items) => {
        res.redirect('/items');
    });
});

// Edit - Route

// Show - Route
itemsRouter.get('/:id', (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render('/show', {
            item: foundItem,
        });
    });
});

//=============================================================
// EXPORT
module.exports = itemsRouter;