const ProjectDAO = require('../services/ProjectDAO');
// const ProjectsUsersDAO = require('../services/Projects_UsersDAO');

class ProjectController {
  static getAll(req, res) {
    ProjectDAO.all().then((projects) => {
      res.status(200).json(projects);
    });
  }

  static getOne(req, res) {
<<<<<<< HEAD
    ProjectDAO
    .findBy({
      id: req.params.id,
    })
    .then((project) => res.status(200).json(project));
=======
    ProjectDAO.findBy({
      id: req.params.id,
    })
    .then((project) => {
      res.status(200).json(project);
    });
>>>>>>> b1470c4e0ce844d697c4702615dc024e2742f57b
  }

  static createProject(req, res) {
    const projectData = req.body;

    ProjectDAO.create(projectData)
    .then((project) => {
      res.status(200).json(project);
    });
  }

  static updateProject(req, res) {
    const projectData = req.body;

    ProjectDAO.update(projectData)
    .then((project) => {
      res.status(200).json(project);
    });
  }

  static deleteProject(req, res) {
    const id = req.params.id;
<<<<<<< HEAD

=======
  
>>>>>>> b1470c4e0ce844d697c4702615dc024e2742f57b
    ProjectDAO.delete(id)
    .then(() => {
      res.status(204).send();
    });
  }
}

module.exports = ProjectController;
