CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  user_id INTEGER REFERENCES users (id),
  project_id INTEGER REFERENCES projects (id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
