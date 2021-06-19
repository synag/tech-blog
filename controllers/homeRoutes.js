const router = require("express").Router();
const { BlogPost } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({}); 
    const blogs = blogData.map((blogPost) => {
      return blogPost.get({ plain: true });
     });
    res.render("homepage", {
      blogs
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

///FIX
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  // Otherwise, render the 'login' template
  res.render("login");
});

router.get("/homepage", withAuth, async(req, res) => {
  try {
    const blogData = await BlogPost.findAll({}); 
    const blogs = blogData.map((blogPost) => {
      return blogPost.get({ plain: true });
     });
    res.render("homepageLink", {
      blogs
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post", withAuth, (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  // Otherwise, render the 'login' template
  res.render("newPost");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("signup");
});

router.get("/blogs", withAuth, async (req, res) => {
  try {
    // Get all blogs based on logged in user
    const userData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

   
    // Serialize blogs data so templates can read it
    const users = userData.map((blogPost) => {
     return blogPost.get({ plain: true });
    });
   
    
    res.render("dashboard", {
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/update", withAuth, async (req, res) => {
  try {
    // Get all blogs based on logged in user
    const userData = await BlogPost.findAll({
      where: {
        id: 3,
      },
    });

   console.log(userData)
    // Serialize blogs data so templates can read it
    const users = userData.map((blogPost) => {
     return blogPost.get({ plain: true });
    });
   
    console.log(users)
    res.render("crudPost", {
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




  


module.exports = router;
