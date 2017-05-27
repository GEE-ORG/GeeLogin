/**
 * Created by geeku on 27/05/2017.
 */
const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new koa();

app.use(bodyParser({
	detectJSON: function (ctx) {
		return /\.json$/i.test(ctx.path);
	}
}));
app.use(async function (ctx, next) {
	console.log(`${ctx.method} ${ctx.url}`);
	await next();
});

router.get('/', async (ctx, next) => {
	ctx.response.body = 'Hello Koa2';
});

router.post('/', async (ctx) => {
	ctx.response.body = JSON.stringify(ctx.request);
});

app.use(router.routes());

app.listen(3000);