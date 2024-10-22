# Sample Node.js Application - Docker

## Overview
This repository contains a sample Node.js application intended to demonstrate Dockerization as part of the [ECS Microservice Project](https://github.com/sagar-uprety/ecs-on-ec2-terraform.git). It serves as a practical example to understand the process of containerizing a Node.js application using Docker.

## Prerequisites
- Basic knowledge of Node.js and Express
- Docker installed on your machine
- Familiarity with Docker concepts and commands

## Steps to Run Locally 
1. Clone the repository:
    
    ```git clone https://github.com/sagar-uprety/ecs-shop-app-nodejs-sample```

2.  Build the Docker image (run from the root of project directory):

    ```
    docker build -t shop-app .
    ```

3. Run the container

    ```
    docker run -dp 3000:3000 shop-app .
    ```



## Contributing
Contributions to this project are welcome. Please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes and push to the branch
4. Create a pull request

## License
This repo is licensed under [The MIT License](https://opensource.org/license/mit/)

