const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticateJWT } = require('../middelwares/jwt');

router.post('/add',authenticateJWT , productController.add );
router.get('lists',productController.lists),
router.post('/lists', productController.lists);
router.put('/update/:id', productController.update);
router.delete('/delete/:id',productController.delete);
router.get('/details/:id',productController.details)

module.exports = router;