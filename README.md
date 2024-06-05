# Rest Api Toko Online Nodejs
Belajar membuat rest api toko online menggunakan beberapa teknologi sebagai berikut

# Mini Toko Online 
Membuat website sederhana


# Tech Stack

**Server:** Node, Express JS

**Frontend:** EJS

**Database:** Mysql

**Container:** Docker



## API User Reference

### Login User

```http
  POST /api/users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `string` | **Required** Login User |

#### Body 
```json
{
  "email": "string",
  "password": "string",
}
```

#### Response
```json
{
  "status": "Success",
  "code": "200",
  "data": {
    "token": "string"
  }
}
```


### Register User

```http
  POST /api/users/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `string` | **Required** Body to regist user |

#### Body
```json
{
  "email": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

#### Response
```json
{
  "status": "Success",
  "code": "201",
  "data": {
    "email": "string",
    "password": "hash string"
  }
}
```


