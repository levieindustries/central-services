import List from './modules/lists/models/list';
import ListSchema from './modules/lists/schemas/list';

module.exports = {
  database: {
    type: 'postgres',
    host: 'db',
    password: 'postgres',
    username: 'postgres',
    database: 'central_services',
    synchronize: true,
    entitySchemas: [ListSchema],
    entities: [List]
  }
};
