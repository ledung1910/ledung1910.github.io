const express = require('express');
const ToyModel = require('../models/ToyModels');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('index')
})
router.get('/admin', async (req, res) => {
  //SQL: SELECT * FROM Book
  var toys = await ToyModel.find({});
  //console.log(books);
  //res.send(books);
  res.render('admin', { toys: toys })
})

router.get('/add', (req, res) => {
  res.render('add');
})
router.post('/add', async (req, res) => {
  var toy = req.body;
  await ToyModel.create(toy)
  .then(() => { console.log ('Add new toy succeed !')});
  res.redirect('/admin');
})
router.get('/delete/:id', async (req, res) => {
await ToyModel.findByIdAndDelete(req.params.id)
.then(() => { console.log ('Delete toy succeed !')})
.catch((err) => { console.log ('Delete toy failed !')});

res.redirect('/admin');
})

router.get('/deleteall', async (req, res) => {
  await ToyModel.deleteMany({})
    .then(() => { console.log("Delete all succeed !") })
    .catch((err) => { console.log(err) });
  res.redirect('/admin');
})

router.get('/edit/:id', async (req, res) => {
  var toy = await ToyModel.findById(req.params.id);
  res.render('edit', { toy : toy});
})

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  await ToyModel.findByIdAndUpdate(id,req.body)
  .then(() => { console.log('Edit mobile succeed !') });
  res.redirect('/admin');
})
router.get('/list', async (req, res) => {
  var toys = await ToyModel.find({});
  res.render('list', { toys: toys });
})
router.post('/order', async (req, res) => {
  res.redirect('/list')
})


module.exports = router;