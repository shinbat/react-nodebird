module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {     // mysql에는 users 테이블생성
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // RetweetId
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // post.addUser
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
        db.Post.hasMany(db.Comment);    // post.addComments
        db.Post.hasMany(db.Image);  // post.addImages
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });  // post.addLikers, post.removeLikers
        db.Post.belongsTo(db.Post, { as: 'Retweet' });  // post.addRetweet
    };
    return Post;
};