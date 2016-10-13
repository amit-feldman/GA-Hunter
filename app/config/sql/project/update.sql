UPDATE projects SET name=$1, description=$2, image=$3, url=$4, banner=$5 WHERE id=$6 RETURNING *;
