SELECT COUNT(*) FROM vehicles
JOIN Users ON vehicles.owner_id = users.id
WHERE owner_id = $1