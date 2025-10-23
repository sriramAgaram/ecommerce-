const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const { authenticateJWT } = require('../middelwares/jwt');

router.post('/lists',categoryController.lists);
router.post('/add', authenticateJWT,categoryController.add);
router.put('/update/:id', categoryController.update);
router.delete('/delete/:id', categoryController.delete);

module.exports = router;
