import List from './modules/lists/models/list';
import ListItem from './modules/lists/models/list-item';

import ListItemSchema from './modules/lists/schemas/list-item';
import ListSchema from './modules/lists/schemas/list';

module.exports = {
  database: {
    type: 'postgres',
    host: 'db',
    password: 'postgres',
    username: 'postgres',
    database: 'central_services',
    synchronize: true,
    entitySchemas: [ListSchema, ListItemSchema],
    entities: [List, ListItem]
  }
};
