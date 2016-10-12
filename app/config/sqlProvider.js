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
    delete: sql('./sql/user/delete.sql'),
  },
  projects: {
    all: sql('./sql/project/all.sql'),
    find: sql('./sql/project/find.sql'),
    create: sql('./sql/project/create.sql'),
    delete: sql('./sql/project/delete.sql'),
  },
  projects_users: {
    all: sql('./sql/projects_users/all.sql'),
    find: sql('./sql/projects_users/find.sql'),
    create: sql('./sql/projects_users/create.sql'),
    delete: sql('./sql/projects_users/delete.sql'),
  },
  comments: {
    all:  sql('./sql/comment/all.sql'),
    find: sql('./sql/comment/find.sql'),
    create: sql('./sql/comment/create.sql'),
    delete: sql('./sql/comment/delete.sql'),
},
  upvotes: {
    all: sql('./sql/upvote/all.sql'),
    find: sql('./sql/upvote/find.sql'),
    create: sql('./sql/upvote/create.sql'),
    delete: sql('./sql/upvote/delete.sql'),
  },
};

module.exports = sqlProvider;
