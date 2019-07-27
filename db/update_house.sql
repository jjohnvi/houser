UPDATE houses SET name = $2, address = $3, city = $4, istate = $5, zipcode = $6, image = $7, monthly_mortgage = $8, desired_rent = $9
WHERE id = $1
RETURNING *;