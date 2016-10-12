INSERT INTO projects_users (user_id, project_id)
  VALUES($1, $2) RETURNING *;
