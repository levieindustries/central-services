export default class List {
  constructor(id, title, listItems, deletedAt, createdAt, updatedAt) {
    this.id = id;
    this.title = title;
    this.listItems = listItems;
    this.deletedAt = deletedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
