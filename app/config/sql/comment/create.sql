INSERT INTO comments(body, user_id, project_id) VALUES ($1, $2, $3) RETURNING *;
