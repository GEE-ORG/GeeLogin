/**
 * Created by geeku on 27/05/2017.
 */
require('babel-core/register')({
	presets: ['stage-0','es2015']
});
require("babel-polyfill");
const app = require('./app');