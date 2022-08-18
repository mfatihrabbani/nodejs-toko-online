curl http://localhost:3000/api/checkouts \
--include \
--header "Content-Type: application/json" \
--request "POST" \
--data '{"orderId": "1kjqhpko8l6z4s2py", "userId": "1kjqhp6d8l6c7mupp"}'