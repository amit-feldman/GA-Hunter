const db = require('../config/db');
const sql = require('../config/sqlProvider').projects;
const Project = require('../models/Project');

class ProjectDAO {
  static all() {
    return db
    .map(sql.all, [], (row) => new Project(row));
  }

  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];

    return db
    .one(sql.find, [key, value])
    .then((row) => new Project(row));
  }

  static create({
    name,
    description,
    image,
    project,
    upvote,
  }) {
    return db
    .one(sql.create, [
      name,
      description,
      image,
      project,
      upvote,
    ])
    .then((row) => new Project(row));
  }

  static update({
    id,
    name,
    description,
    image,
    project,
    upvote,
  }) {
    return db
    .one(sql.update, [
      name,
      description,
      image,
      project,
      upvote,
      id,
    ])
    .then((row) => new Project(row));
  }

  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = ProjectDAO;
