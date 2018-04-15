import ListItem from '../models/list-item';

export default {
  target: ListItem,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    listId: {
      foreign: true,
      type: 'int'
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
  },
  relations: {
    list: {
      target: 'List',
      type: 'many-to-one'
    }
  }
};
