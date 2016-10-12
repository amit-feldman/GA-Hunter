UPDATE projects SET name=$1, description=$2, image=$3, project=$4, upvote=$5 WHERE id=$6 RETURNING *;
