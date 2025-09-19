const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')

router.post('/add' , productController.add );
router.get('lists',productController.lists),
router.post('/lists', productController.lists);
router.put('/update/:id', productController.update);
router.delete('/delete/:id',productController.delete)

module.exports = router;