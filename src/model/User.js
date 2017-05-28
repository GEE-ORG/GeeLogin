/**
 * Created by geeku on 28/05/2017.
 */
import db from './connect';
import sequelize from 'sequelize';

const User = db.define('user', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    nickname: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    salt: {
        type: sequelize.STRING(8),
        allowNull: false,
    },
    avatar: {
        type: sequelize.STRING,
    },
    ip: {
        type: sequelize.STRING,
        validate: {
            isIP: true
        }
    },
    note: {
        type: sequelize.TEXT('tiny'),
    }
});

export default User;