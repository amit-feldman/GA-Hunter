UPDATE projects SET name=$1, description=$2, tagline=$3, image=$4, url=$5, banner=$6 WHERE id=$7 RETURNING *;
