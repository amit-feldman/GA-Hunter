class Project {
  constructor({
    id,
    name,
    description,
    tagline,
    image,
    project,
    upvote,
    created,
    url,
    banner,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tagline = tagline;
    this.image = image;
    this.project = project;
    this.upvote = upvote;
    this.create = created;
    this.url = url;
    this.banner = banner;
  }
}

module.exports = Project;
