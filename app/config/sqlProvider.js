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
    delete: sql('./sql/projects/delete.sql'),
  },
};

module.exports = sqlProvider;
