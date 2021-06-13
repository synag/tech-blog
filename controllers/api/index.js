const router = require('express').Router();
const userRoutes = require('./userRoute');
const blogPostRoute = require('./blogPostRoute');


router.use('/users', userRoutes);
router.use('/blog', blogPostRoute);


module.exports = router;