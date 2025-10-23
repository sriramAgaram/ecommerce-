const route = require('express').Router();
const subcategoryController = require('../controllers/subcategory.controller')

route.post('/add' , subcategoryController.add );
route.get('/list', subcategoryController.lists);
route.delete('/delete/:id', subcategoryController.delete);
route.put('/update/:id', subcategoryController.update);

module.exports = route