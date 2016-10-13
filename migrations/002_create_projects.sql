CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255),
  url VARCHAR(255),
  banner VARCHAR(255),
  upvote INTEGER,
  user_id INTEGER REFERENCES users (id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
