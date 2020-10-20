const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            // RetweetId
        }, {
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize,
        });
    };

    static associate(db) {
        db.Post.belongsTo(db.User); // post.addUser
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
        db.Post.hasMany(db.Report);  
        db.Post.hasMany(db.Comment);    // post.addComments
        db.Post.hasMany(db.Image);  // post.addImages
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });  // post.addLikers, post.removeLikers
        db.Post.belongsTo(db.Post, { as: 'Retweet' });  // post.addRetweet
    };
};