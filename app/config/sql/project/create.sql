INSERT INTO projects (name, description, image, url, banner) VALUES($1, $2, $3, $4, $5) RETURNING *;
