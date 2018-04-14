import app from '../functions/app';
import http from 'http';
import {promisify} from 'util';

const server = http.createServer(app.callback());

export default async function () {
  console.log('Starting HTTP server...');
  await promisify(server.listen.bind(server, 3000))();
  console.log('HTTP server started');
}
