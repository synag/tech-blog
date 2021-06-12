const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasOne(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

BLogPost.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, BlogPost };