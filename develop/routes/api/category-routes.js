const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // --> SQL Statment of 'SELECT * FROM CATEGORIES;'
  Category.findAll()
  .then(data => {
    // if we get a successful response from the database
    console.log("data: ", data)
    // we now send a RESPONSE to the CLIENT (webpage/insomnia) with the requested data
    res.status(200).json(data)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // --> SQL Statment of 'SELECT _id, name FROM CATEGORIES where id = 2;'
  Category.findByPk(req.params.id)
  Category.findOne({ id: req.params.id })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;