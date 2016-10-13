CREATE TABLE projects_users (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  project_id INTEGER REFERENCES projects (id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
