-- These migrations are to be performed manually using
-- the psql console

DROP DATABASE IF EXISTS ga_hunter;
CREATE DATABASE ga_hunter;

\c ga_hunter

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  course VARCHAR NOT NULL,
  created_at DATETIME
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  description TEXT,
  img_url VARCHAR(255),
  project_url VARCHAR(255),
  upvote_count INTEGER,
  created_at DATETIME
);
