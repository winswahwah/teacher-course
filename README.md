> ## Project Description

A simple teacher & course RESTFUL API using Node.js with Express.js and PostgreSQL

All libraries used :

     - Express
     - dotenv
     - helmet
     - joi
     - Sequelize
     - Sequelize-CLI
     - pg
     - pg-hstore
     - nodemon (for dev only)

> ## Docker Service Description

Service `database`
Image: postgres:11.2
Port: 5432

Service `app`
Image: node:12
Port: 3000

*See full detail on docker-compose.yml*

> ## Prerequisite
```
 - Docker with Docker Compose
 - API Client such as POSTMAN (for testing)
```
> ## Running application using Docker

`docker-compose up` or `docker-compose up -d`

> ## API Usage

**Get all teachers API**
API Path: `[GET] http://localhost:3000/teacher`
Content Type: `application/json`
Request Parameter: `none`

**Create teacher API**
API Path: `[POST] http://localhost:3000/teacher`
Content Type: `application/json`
Request Parameter:
`firstName [String]`
`lastName [String]`
`age [Integer]`

Example Request:

    {
	    "firstName": "Tanawin",
	    "lastName": "Samutsin",
	    "age": 31
    }

**Get all courses API**
API Path: `[GET] http://localhost:3000/course`
Content Type: `application/json`
Request Parameter: `none`

**Create course API**
API Path: `[POST] http://localhost:3000/course`
Content Type: `application/json`
Request Parameter:
`courseName [String]`
`courseDescription [String]`
`teacherId [Integer]` (teacherId must be exist in database)

Example Request:

    {
	    "courseName": "Node.js Programming",
	    "courseDescription": "Node.js Programming",
	    "teacherId": 1
    }

> ## Developed by
    Tanawin Samutsin
