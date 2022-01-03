# Message Microservice - Backend

This miscroservice is written in Nodejs with Datastore as database.
It has set of APIs (documented in swagger), which allow frontend or enduser to persist messages in Datastore using Datastore client library and fetch them again.

## Some of the key points

1.  Follows standard nodejs structure
2.  Cloud database emulator used for local developement
3.  Database viewer
4.  Request validation through middleware
5.  Common exception hanfler with perticular extended errors
6.  Health endpoint is provided to check running status of service
7.  Swagger docs with api executable UI
8.  Dockerized local execution
9.  Eslint integrated
10. Local and Cloud logging 

# Run microservice

To start the application, 

    cd files/src

then execute

### Linux

    npm run dev

### Windows

    npm run dev-windows


## Api's swagger documentaion can be seen at

    http://localhost:3003/docs/


### For running unit test cases

    nyc mocha \"./tests/**/*.js\" --exit

### For lint check 

    eslint -c .eslint.json --no-color .

### For automated fix of lint issues 

    eslint -c .eslint.json  --no-color --fix .

# Improvements to be done

1. Make microservice independent of database using [Rest-layer](https://github.com/rs/rest-layer)
2. More CI targets
3. Automated deployment
