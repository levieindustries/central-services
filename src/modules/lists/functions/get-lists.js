import {getRepository} from 'typeorm';
import List from '../entities/list';

const listRepository = getRepository(List);

module.exports = async () => await listRepository.find();
