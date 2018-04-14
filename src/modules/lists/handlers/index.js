import {getRepository} from 'typeorm';
import List from '../models/list';

const listRepository = getRepository(List);

module.exports = ctx => (ctx.body = listRepository.find());
