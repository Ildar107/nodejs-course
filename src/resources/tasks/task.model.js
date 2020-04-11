const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'ToDo',
    order = 0,
    description = 'task for work that need to do',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order,
    this.description = description,
    this.userId = userId,
    this.boardId = boardId,
    this.columnId = columnId
  }
}

module.exports = Task;
