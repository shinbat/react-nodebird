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
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
    };
    return Post;
};