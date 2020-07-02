module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {     // mysql에는 users 테이블생성
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // UserId: {}   belongsTo가 foreign key를 생성한다
        // PostId: {}
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
};