const db = require('../config/db');
const sql = require('../config/sqlProvider').comments;
const Comment = require('../models/Comment.js');

class CommentDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Comment(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db
    .one(sql.find, [key, value])
    .then((row) => new Comment(row));
  }
  static create({ body, user_id, project_id }) {
    return db
    .one(sql.create, [body, user_id, project_id])
    .then((row) => new Comment(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = CommentDAO;
