import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {database} from '../config';
import json from 'koa-json';
import Koa from 'koa';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import Router from 'koa-router';

const router = new Router();
const app = new Koa();

const responseTime = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
};

createConnection(database)
  .then(async () => {
    app.use(responseTime);
    app.use(logger());
    // app.use(koaBody());
    app.use(json({pretty: false, param: 'pretty'}));

    router
      .get('/', ctx => (ctx.body = 'Welcome to Central Services!'))
      .get('/lists', require('../modules/lists/handlers/index'))
      .post('/lists', koaBody(), require('../modules/lists/handlers/create'))
      .get('/health', ctx => (ctx.status = 204));

    app.use(router.routes());
  })
  .catch(er => console.log('TypeORM connection error: ', er));

export default app;
