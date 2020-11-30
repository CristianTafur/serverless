## Repository

Rules

1. git clone https://gitlab.com/aws50/serverless.git .
2. create your branch  **git checkout -b feature/<nameBranch>** .

## Development environment

Environment versions

1. node: latest or **12.18.0**
2. serveless: latest or **2.12.0**
3. postgress: latest or **12.0.0**

---

## Install project

```sh 
$ npm i 
```

```sh 
$ npm i -g serveless  
```

**or** 

```sh 
$ npm i -g serveless@2.12.0
```
---

## Project settings

1. Create table **user-m** in postgress.
2. in **app/config/DataBase.js** modify **DB_PASS** = **yourPass** and  **DB_PORT** = **yourPort**.

---

## Run project

```sh
$ npm run start
```
## Run test

```sh
$ npm run test:coverage
```

