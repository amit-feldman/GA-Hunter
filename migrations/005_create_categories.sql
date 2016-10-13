CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  project_id INTEGER REFERENCES projects (id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
