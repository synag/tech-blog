// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    blogPost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogPost',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
})

module.exports = Comments;