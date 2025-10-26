const route = require('express').Router();
const subcategoryController = require('../controllers/subcategory.controller');
const { authenticateJWT } = require('../middelwares/jwt');

route.post('/add' ,authenticateJWT ,subcategoryController.add );
route.post('/lists',subcategoryController.lists)
route.get('/lists', subcategoryController.lists);
route.delete('/delete/:id', subcategoryController.delete);
route.put('/update/:id', subcategoryController.update);

module.exports = route