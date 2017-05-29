/**
 * Created by geeku on 29/05/2017.
 */
import db from './connect';
import sequelize from 'sequelize';

const OAuth = db.define('oauth', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false,
    },
    token: {
        type: sequelize.STRING,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    avatar: {
        type: sequelize.STRING,
    },
    source: {
        type: sequelize.STRING
    },
    note: {
        type: sequelize.TEXT('tiny'),
    },
    uid: {
        type: sequelize.INTEGER,
    }
}, {
    freezeTableName: true
});

export default OAuth;