const uuid = require('uuid');
<<<<<<< HEAD
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid
    },
    name: String,
    login: String,
    password: String
  },
  { versionKey: false }
);

userSchema.statics.toResponse = (user) => {
  const { id, name, login } = user;
  return { id, name, login };
}

const User =  mongoose.model('User', userSchema);

=======

class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

>>>>>>> ee60976ee4afde3b2d74e4ec936dcd00a7a06e6e
module.exports = User;
