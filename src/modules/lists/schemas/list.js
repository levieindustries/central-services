import {List} from '../models/list';

export default {
  target: List,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
      length: 255
    },
    deletedAt: {
      type: 'timestamp'
    },
    createdAt: {
      type: 'timestamp'
    },
    updatedAt: {
      type: 'timestamp'
    }
  }
};
