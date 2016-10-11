INSERT INTO upvotes (project_id, user_id) VALUES($1, $2) RETURNING *;
