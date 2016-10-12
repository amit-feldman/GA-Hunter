const db = require('../config/db');
// const sql = require('../config/sqlProvider').projects;
const sql = require('../config/sqlProvider').projects_users;
const ProjectUserObj = require('../models/ProjectUser');

class ProjectsUsersDAO {
  static all() {
    return db.map(sql.all, [], (row) => new ProjectUserObj(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db
    .one(sql.find, [key, value])
    .then((row) => new ProjectUserObj(row));
  }
  static create({ user_id, project_id }) {
    return db
    .one(sql.create, [user_id, project_id])
    .then((row) => new ProjectUserObj(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = ProjectsUsersDAO;
