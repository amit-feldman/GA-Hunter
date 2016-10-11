INSERT INTO projects (name, description, image, project, upvote) VALUES($1, $2, $3, $4, $5) RETURNING *;
