/**
 * Created by geeku on 28/05/2017.
 */
import Sequelize from 'sequelize';
import dbConfig from '../conf/database';

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

export default db;