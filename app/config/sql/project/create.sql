INSERT INTO projects (name, description, tagline, image, url, banner) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;
