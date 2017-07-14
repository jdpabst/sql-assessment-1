select * FROM vehicles
JOIN users
    ON vehicles.owner_id = users.id
WHERE name LIKE $1