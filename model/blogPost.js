// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    shares: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currentPrice: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
})

module.exports = BlogPost;