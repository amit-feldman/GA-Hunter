INSERT INTO users (email, password, course, createdAt) VALUES($1, $2, $3, $4) RETURNING *;
