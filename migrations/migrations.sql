-- These migrations are to be performed manually using
-- the psql console

DROP DATABASE IF EXISTS ga_hunter;
CREATE DATABASE ga_hunter;

\c ga_hunter

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  course VARCHAR NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  description TEXT NOT NULL,
  imgUrl VARCHAR(255),
  projectUrl VARCHAR(255),
  upvoteCount INTEGER,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE projects_users (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  project_id INTEGER REFERENCES projects (id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  user_id INTEGER REFERENCES users (id),
  project_id INTEGER REFERENCES projects (id),
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);
