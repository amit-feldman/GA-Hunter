UPDATE users SET name=$1, email=$2, password=$3, course=$4 WHERE id=$5 RETURNING *; 
