class User {
  constructor({ id, name, email, password, course, created }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.course = course;
    this.created = created;
  }
}

module.exports = User;
