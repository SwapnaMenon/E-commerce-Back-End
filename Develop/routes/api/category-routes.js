const router = require('express').Router();
const { Category, Product } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:{
      //model:Product//
    }
  })
  .then(function(db_catergory) {
    res.json(db_catergory)
  })
  .catch(function(error) {
    res.json (error)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk({
    where:{
      id:req.params.id
    }
  })
  .then(function(db_catergory) {
    res.json(db_catergory)
  })
  .catch(function(error) {
    res.json (error)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category_name
  })
  .then(function(db_catergory) {
    res.json("category has been added")
  })
  .catch(function(error) {
    res.json (error)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
