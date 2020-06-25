module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {     // mysql에는 users 테이블생성
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };
    return Image;
};