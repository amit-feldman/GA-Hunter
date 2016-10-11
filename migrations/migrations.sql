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
  image VARCHAR(255),
  project VARCHAR(255),
  upvote INTEGER,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
