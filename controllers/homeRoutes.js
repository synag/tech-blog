const router = require("express").Router();
const { BlogPost, Comments } = require("../models");
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
    const blogData = await BlogPost.findAll({
      where: {
        id: req.query.id
      },
    });

    // Serialize blogs data so templates can read it
    const singleBlogPost = blogData.map((blogPost) => {
     return blogPost.get({ plain: true });
    });
   
   
    res.render("crudPost", {
      singleBlogPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/commentpost", withAuth, async (req, res) => {
  try {
    // Get all blogs based on logged in user
    const blogData = await BlogPost.findAll({
      where: {
        id: req.query.id
      },
    });


    // Serialize blogs data so templates can read it
    const singleBlogPost = blogData.map((blogPost) => {
     return blogPost.get({ plain: true });
    });
   
  
    res.render("comment", {
      singleBlogPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/display", withAuth, async (req, res) => {
  try {
    // Get all comments based on logged in user
    const blogData = await BlogPost.findAll({
      where: {
        id: req.query.id
      },

      
    });
    // console.log(blogData)

    const commentData = await Comments.findAll({
      where: {
        blogPost_id: req.query.id
      },

    });
    console.log(commentData)


    // Serialize blogs data so templates can read it
    const singleBlogPost = blogData.map((blogPost) => {
     return blogPost.get({ plain: true });
    });
   
    const commentBlogPost = commentData.map((commentPost) => {
      return commentPost.get({ plain: true });
     });
   
    res.render("display", {
      singleBlogPost,
      commentBlogPost
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
