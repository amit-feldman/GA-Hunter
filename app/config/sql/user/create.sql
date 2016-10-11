INSERT INTO users (name, email, password, course) VALUES($1, $2, $3, $4) RETURNING *;
