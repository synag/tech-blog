const router = require('express').Router();
const sequelize = require('../../config/connection');
const { BlogPost } = require('../../models');
const fetch = require("node-fetch");


router.post('/create', async (req, res) => {
    try {
      const newProject = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
    
        

      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  })


//Create new blog into the blogPost table
// router.post('/create', async(req, res) => {
//     try {
//         const newEntry = req.body;
//         newEntry.user_id = req.session.user_id
//             .then(function(response) {
//                 return response.json();
//             });
//         const entryData = await BlogPost.create(newEntry);
//         res.status(200).json(entryData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

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
// //Update 

//Delete an entry ---THINK THROUGH DELETE --NOT SURE THIS CODE WILL CUT IT
router.delete('/delete', async(req, res) => {
    try {
        const selectedRow = await BlogPost.destroy({
            where: {
                user_id: req.session.user_id,
                title: req.body.title
            }
        });
        if (!selectedRow) {
            res.status(404).json({ message: 'None of that stock is owned by this account.' });
            return;
        }
        res.status(200).json(selectedRow);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;