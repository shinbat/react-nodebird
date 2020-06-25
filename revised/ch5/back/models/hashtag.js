module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {     // mysql에는 users 테이블생성
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };
    return Hashtag;
};