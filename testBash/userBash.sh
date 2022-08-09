curl http://localhost:3000/api/users/register \
--include \
--header "Content-Type: application/json" \
--request "POST" \
--data '{"email": "admin123@gmail.com", "password": "12345678", "confirmPassword": "12345678"}'

curl http://localhost:3000/api/users/login \
--include \
--header "Content-Type: application/json" \
--request "POST" \
--data '{"email": "admin123@gmail.com", "password": "12345678"}'