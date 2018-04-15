import List from './modules/lists/entities/list';
import ListItem from './modules/lists/entities/list-item';

module.exports = {
  database: {
    type: 'postgres',
    host: 'db',
    password: 'postgres',
    username: 'postgres',
    database: 'central_services',
    synchronize: true,
    entities: [List, ListItem]
  }
};
