class User {
  constructor({ id, email, password, course }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.course = course;
  }
}

module.exports = User;
