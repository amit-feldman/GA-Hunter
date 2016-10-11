class Project {
  constructor({ id, name, description, image, project, upvote, created }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.project = project;
    this.upvote = upvote;
    this.create = created;
  }
}

module.exports = Project;
