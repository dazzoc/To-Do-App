// DEPENDENCIES
const express = require('express');
const itemsRouter = express.Router(); 
const Item = require('../models/item');
const itemSeed = require('../models/itemSeed.js')

//==========================================================
// ROUTES
// Seed - Route
itemsRouter.get('/seed', (req, res) => {
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
    res.render('new');
});

// Detele - Route
itemsRouter.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
        //res.send(deletedItem);
        console.log(req.params.id);
        res.redirect('/items');
    });
});

// Update - Route
itemsRouter.put('/:id', (req, res) => {
    if(req.body.urgent === "on") {
		req.body.urgent = true
	} else {
		req.body.urgent = false
	}
	// res.send(req.body);
    Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updateItem) => {
            //res.send(item);
            res.redirect(`/items/${req.params.id}`)
        }
    );
});

// Create - Route
itemsRouter.post('/', (req, res) => {
    if (req.body.urgent === 'on') {
		//if checked, req.body.completed is set to 'on'
		req.body.urgent = true;
	} else {
		//if not checked, req.body.completed is undefined
		req.body.urgent = false;
	}
    Item.create(req.body, (error, items) => {
        res.redirect('/items');
    });
});

// Edit - Route
itemsRouter.get("/:id/edit", (req, res) => {
	Item.findById(req.params.id, (error, foundItem) => {
	  res.render('edit', {
		item: foundItem,
	  });
	});
  });

// Show - Route
itemsRouter.get('/:id', (req, res) => {
	Item.findById(req.params.id, (err, foundItem) => {
		res.render('show', {
            item: foundItem,
        });
	});
});


//=============================================================
// EXPORT
module.exports = itemsRouter;