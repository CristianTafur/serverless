## Repository

Rules

1. git clone https://gitlab.com/aws50/serverless.git .
2. create your branch  **git checkout -b feature/<nameBranch>** .


## Development environment

environment versions

```sh
1. node: latest or **12.18.0**
2. serveless: latest or **2.12.0**
3. postgress: latest or **12.0.0**
```
---

## install project

```sh
1. npm i
2. npm i -g serveless or npm i -g serveless@**2.12.0**
```
---

## Configure project

```sh
1. Create table **user-m** in postgress.
2. in **app/config/DataBase.js** modify **DB_PASS** = **<yourPass>** and  **DB_PORT** = **<yourPort>**.
```
---

## Run project

```sh
1. npm run start
```
## Run test

```sh
1. npm run test:coverage
```

