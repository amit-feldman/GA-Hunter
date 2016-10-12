const db = require('../config/db');
const sql = require('../config/sqlProvider').categories;
const Category = require('../models/Category');

class CategoryDAO {
  static all() {
    return db
    .map(sql.all, [], (row) => new Category(row));
  }

  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];

    return db
    .one(sql.find, [key, value])
    .then((row) => new Category(row));
  }

  static create({
    name,
    project_id,
  }) {
    return db
    .one(sql.create, [
      name,
      project_id,
    ])
    .then((row) => new Category(row));
  }

  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = CategoryDAO;
