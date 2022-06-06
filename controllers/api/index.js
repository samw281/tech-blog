const router = require('express').Router();

router.use('/users', require('./user-routes'));
router.use('/post', require('./post-routes'));


module.exports = router;