const User = require('./user');
const BlogPost = require('./blogPost');
const Comments = require('./comments');

User.hasOne(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
})

BlogPost.hasMany(Comments, {
    foreignKey: 'user_id',
})

module.exports = { User, BlogPost };