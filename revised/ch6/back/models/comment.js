const DataTypes = require('sequelize');
const { Model } = DataTypes; 

module.exports = class Comment extends Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            // UserId: {}   belongsTo가 foreign key를 생성한다
            // PostId: {}
        }, {
            modelName: 'Comment',
            tableName: 'comments',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize,
        });
    };

    static associate(db) {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
};