INSERT INTO users (email, password, course) VALUES($1, $2, $3) RETURNING *;
