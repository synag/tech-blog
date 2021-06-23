const router = require('express').Router();
const sequelize = require('../../config/connection');
const { BlogPost } = require('../../models');
const fetch = require("node-fetch");


router.post('/create', async (req, res) => {
    try {
      const newPost = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,

      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  })


//Get an blog post based on user 
router.get('/get', async(req, res) => {
    try {
        const primaryKey = req.session.user_id;
        const blogData = await BlogPost.findAll({ where: { user_id: primaryKey } });
        res.status(200).json(blogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//Get all blog post 
router.get('/get', async(req, res) => {
    try {
        const blogData = await BlogPost.findAll();
        res.status(200).json(blogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})
// //Update route works
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const blogData = await BlogPost.update(
      req.body,

      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

//Delete an entry ---
router.delete('/:id', async(req, res) => {
    try {
        const selectedRow = await BlogPost.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!selectedRow) {
            res.status(404).json({ message: 'None of that blog post  owned by this account.' });
            return;
        }
        res.status(200).json(selectedRow);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;