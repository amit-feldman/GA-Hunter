UPDATE comments SET body=$1 WHERE id=$2 RETURNING *;
