const User = require('./user');
const BlogPost = require('./blogPost');
const Comments = require('./comments');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
})

BlogPost.hasMany(Comments, {
    foreignKey: 'blogPost_id',
})

module.exports = { User, BlogPost,Comments };