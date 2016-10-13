CREATE TABLE upvotes (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects (id),
  user_id INTEGER REFERENCES users (id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
