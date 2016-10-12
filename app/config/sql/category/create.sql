INSERT INTO categories (name, project_id) VALUES($1, $2) RETURNING *;
