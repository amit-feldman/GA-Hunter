const ProjectDAO = require('../services/ProjectDAO');
// const ProjectsUsersDAO = require('../services/Projects_UsersDAO');

class ProjectController {
  static getAll(req, res) {
    ProjectDAO.all().then((projects) => {
      res.status(200).json(projects);
    });
  }

  static getOne(req, res) {
    ProjectDAO
    .findBy({ id: req.params.id })
    .then((project) => res.status(200).json(project));
  }

  static createProject(req, res) {
    const projectData = req.body;

    ProjectDAO.create(projectData)
    .then((project) => {
      res.status(200).send(project);
    });
  }

  static updateProject(req, res) {
    const projectData = req.body;

    ProjectDAO.update(projectData)
    .then((project) => {
      res.status(200).send(project);
    });
  }

  static deleteProject(req, res) {
    const id = req.params.id;

    ProjectDAO.delete(id)
    .then(() => res.status(204).send());
  }
}

module.exports = ProjectController;
