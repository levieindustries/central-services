export default class ListItem {
  constructor(id, listId, deletedAt, createdAt, updatedAt) {
    this.id = id;
    this.listId = listId;
    this.deletedAt = deletedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
