const KoaRouter = require('koa-router');

const { verifyAuth } = require('../middlewares/user.middlewares');
const { createMoment } = require('../controllers/moment.controllers');

const momentRouters = new KoaRouter({ prefix: '/moment' });

momentRouters.post('/', verifyAuth, createMoment);

module.exports = momentRouters;
