class User {
  constructor({ id, email, password, course, createdAt }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.course = course;
    this.createdAt = createdAt;
  }
}

module.exports = User;
