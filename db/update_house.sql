UPDATE houses SET name = $2, address = $3, istate = $4, zipcode = $5
WHERE id = $1
RETURNING *;