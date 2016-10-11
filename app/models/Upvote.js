class Upvote {
  constructor({ id, project_id, user_id, created }) {
    this.id = id;
    this.project_id = project_id;
    this.user_id = user_id;
    this.created = created;
  }
}

module.exports = Upvote;
