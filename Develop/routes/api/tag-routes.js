const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
  })
  .then(function(db_tag) {
    res.json(db_tag)
  })
  .catch(function(error) {
    console.log (error)
    res.json (error)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(function(db_tag) {
    res.json(db_tag)
  })
  .catch(function(error) {
    console.log (error)
    res.json (error)
  })

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name:req.body.tag_name
  })
  .then(function(db_tsag) {
    res.json("tag has been added")
  })
  .catch(function(error) {
    res.json (error)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update (req.body,{
    where:{
      id:req.params.id 
    }
  })
  .then(function(db_tag) {
    res.json("Tag has been updated")
  })
  .catch(function(error) {
    res.json (error)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(function(db_tag) {
    res.json(db_tag)
  })
  .catch(function(error) {
    console.log (error)
    res.json (error)
  })
});

module.exports = router;
