UPDATE houses SET name = $2, address = $3, city = $4, istate = $5, zipcode = $6
WHERE id = $1
RETURNING *;