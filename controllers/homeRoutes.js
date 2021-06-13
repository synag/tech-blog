const router = require('express').Router();
const { BlogPost} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async(req, res) => {

    try {
        // const userData = await BlogPost.findAll({})

//review the handlebars ****
        res.render('login', {
            logged_in: req.session.logged_in
            // userData
        });

    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/blogs', withAuth, async(req, res) => {
    try {
        // Get all blogs based on logged in user
        const userData = await BlogPost.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });


        // Serialize stock data so templates can read it
        const users = userData.map((blogPost) => { blogPost.get({ plain: true }) });

        // Pass serialized data into stockcarddetails template
        //update handlebars*****
        res.render('stockcarddetails', {
            users,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;