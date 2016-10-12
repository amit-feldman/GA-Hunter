const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);

  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    update: sql('./sql/user/update.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  projects: {
    all: sql('./sql/project/all.sql'),
    find: sql('./sql/project/find.sql'),
    create: sql('./sql/project/create.sql'),
    update: sql('./sql/project/update.sql'),
    delete: sql('./sql/project/delete.sql'),
  },
  projects_users: {
    all: sql('./sql/projects_users/all.sql'),
    find: sql('./sql/projects_users/find.sql'),
    create: sql('./sql/projects_users/create.sql'),
    update: sql('./sql/projects_users/update.sql'),
    delete: sql('./sql/projects_users/delete.sql'),
  },
  comments: {
    all: sql('./sql/comment/all.sql'),
    find: sql('./sql/comment/find.sql'),
    create: sql('./sql/comment/create.sql'),
    update: sql('./sql/comment/update.sql'),
    delete: sql('./sql/comment/delete.sql'),
  },
  upvotes: {
    all: sql('./sql/upvote/all.sql'),
    find: sql('./sql/upvote/find.sql'),
    create: sql('./sql/upvote/create.sql'),
    update: sql('./sql/upvote/update.sql'),
    delete: sql('./sql/upvote/delete.sql'),
  },
  categories: {
    all: sql('./sql/category/all.sql'),
    find: sql('./sql/category/find.sql'),
    create: sql('./sql/category/create.sql'),
    update: sql('./sql/category/update.sql'),
    delete: sql('./sql/category/delete.sql'),
  },
};

module.exports = sqlProvider;
