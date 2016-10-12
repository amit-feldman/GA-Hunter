class Category {
  constructor({
    id,
    name,
    project_id,
    created,
  }) {
    this.id = id;
    this.name = name;
    this.project_id = project_id;
    this.created = created;
  }
}

module.exports = Category;
