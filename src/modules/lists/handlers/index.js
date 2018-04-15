import getLists from '../functions/get-lists';

module.exports = async ctx => (ctx.body = await getLists());
