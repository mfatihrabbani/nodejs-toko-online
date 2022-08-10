curl http://localhost:3000/api/orders \
--include \
--header "Content-Type: application/json" \
--request "POST" \
--data '{"userId": "1kjqhp6d8l6c7mupp", "productId" : "1kjqhp2tol6hx7kgc", "quantity": 2, "payment": "OVO"}'