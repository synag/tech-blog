const router = require('express').Router();
const userRoutes = require('./userRoute');
const blogPostRoute = require('./blogPostRoute');
const commentRoute = require('./commentRoute');


router.use('/users', userRoutes);
router.use('/blog', blogPostRoute);
router.use('/comment', commentRoute);


module.exports = router;