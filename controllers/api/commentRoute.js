const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Comments } = require('../../models');
const fetch = require("node-fetch");


router.post('/create', async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,

      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  })

  module.exports = router;