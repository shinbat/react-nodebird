const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Report extends Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            // RetweetId
        }, {
            modelName: 'Report',
            tableName: 'reports',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize,
        });
    };

    static associate(db) {
        db.Report.belongsTo(db.User);
        db.Report.belongsTo(db.Post);
    };
};