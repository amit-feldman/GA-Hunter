class Comment {
  constructor({
    id,
    body,
    user_id,
    project_id,
    created,
  }) {
    this.id = id;
    this.body = body;
    this.user_id = user_id;
    this.project_id = project_id;
    this.created = created;
  }
}

module.exports = Comment;
