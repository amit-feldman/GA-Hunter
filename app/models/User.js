class User {
  constructor({ id, email, password, course, created }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.course = course;
    this.created = created;
  }
}

module.exports = User;
