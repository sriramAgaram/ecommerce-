const express =  require('express');
const router = express.Router();

router.use('/product', require('./product.route'));
router.use('/categories',require('./category.route'));

module.exports = router;