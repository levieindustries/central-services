import {getRepository} from 'typeorm';
import List from '../entities/list';
import ListItem from '../entities/list-item';

const listRepository = getRepository(List);
const listItemRepository = getRepository(ListItem);

module.exports = async ctx => {
  const {
    request: {
      body: {title: name}
    }
  } = ctx;

  const listItem = listItemRepository.create({
    name: 'Foobar',
    createdAt: new Date()
  });

  const list = listRepository.create({
    name,
    createdAt: new Date(),
    listItems: [{name: 'Foobar', createdAt: new Date()}]
  });

  try {
    await listRepository.save(list);
    ctx.body = name;
  } catch (er) {
    ctx.status = 422;
    ctx.body = {error: er.message};
  }
};
