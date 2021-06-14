const router = require('express').Router();
const { BlogPost} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async(req, res) => {

    try {

         const userData = await BlogPost.findAll({}) //Update this to map results and show on homepage


        res.render('homepage', {
            userData
        });

    } catch (err) {
        res.status(500).json(err);
    }

});

///FIX 
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    // Otherwise, render the 'login' template
    res.render('login');
  });

  router.get('/homepage', withAuth, (req, res) => {
    // If the user is already logged in, redirect to the homepage
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    // Otherwise, render the 'login' template
    res.render('homepageLink');
  });


  router.get('/post', withAuth, (req, res) => {
    // If the user is already logged in, redirect to the homepage
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    // Otherwise, render the 'login' template
    res.render('newPost');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
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
        res.render('dashboard', {
            users,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;