const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'some column',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((x) => {
      x.id = uuid();
      return x;
    });
  }
}


module.exports = Board;