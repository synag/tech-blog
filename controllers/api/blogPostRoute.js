const router = require('express').Router();
const sequelize = require('../../config/connection');
const { BlogPost } = require('../../models');
const fetch = require("node-fetch");

//Create new blog into the blogPost table
router.post('/create', async(req, res) => {
    try {
        const newEntry = req.body;
        newEntry.user_id = req.session.user_id
            .then(function(response) {
                return response.json();
            });
        const entryData = await BlogPost.create(newEntry);
        res.status(200).json(entryData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// //Get an entry or entries based on account
// router.get('/get', async(req, res) => {
//     try {
//         const primaryKey = req.session.user_id;
//         const portfolio = await Portfolio.findAll({ where: { user_id: primaryKey } });
//         res.status(200).json(portfolio);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

// //Update 

// //Delete an entry
// router.delete('/delete', async(req, res) => {
//     try {
//         const selectedRow = await Portfolio.destroy({
//             where: {
//                 user_id: req.session.user_id,
//                 stock: req.body.stock
//             }
//         });
//         if (!selectedRow) {
//             res.status(404).json({ message: 'None of that stock is owned by this account.' });
//             return;
//         }
//         res.status(200).json(selectedRow);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

module.exports = router;