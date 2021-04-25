# express-foo

quick refresh on the express ways, covering some of the most common scenarios

### 01 hello world

```shell
curl -v http://localhost:3000
```

### 02 basic routing

```shell
curl -v http://localhost:3000

curl -vX POST http://localhost:3000

curl -vX PUT http://localhost:3000/user

curl -vX DELETE http://localhost:3000/user
```

### 03 better routing


```shell
# request
curl -v http://localhost:3000/users
# simple unit test
npm run test
```

### 04 express routing

expose at `/users` the users express router

```shell
# requests
curl -v http://localhost:3000/users

curl -vX POST http://localhost:3000/users
# simple unit test
npm run test
```
