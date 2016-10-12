const db = require('../config/db');
const sql = require('../config/sqlProvider').upvotes;
const Upvote = require('../models/Upvote');

class UpvoteDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Upvote(row));
  }

  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];

    return db
    .one(sql.find, [key, value])
    .then((row) => new Upvote(row));
  }

  static create({ project_id, user_id, created }) {
    return db
    .one(sql.create, [project_id, user_id, created])
    .then((row) => new Upvote(row));
  }
  
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = UpvoteDAO;
