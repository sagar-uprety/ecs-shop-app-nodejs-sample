# Sample Node.js Application - Docker

## Overview
This repository contains a sample Node.js application intended to demonstrate Dockerization as part of the ECS course module. It serves as a practical example to understand the process of containerizing a Node.js application using Docker.

## About the Course Module
This application is a part of the comprehensive ECS Course by Adex, which covers various aspects of deploying and managing applications using AWS ECS. To learn more about the concepts and gain deeper insights into ECS, check out the [ECS Course by Adex](#).

## Prerequisites
- Basic knowledge of Node.js and Express
- Docker installed on your machine
- Familiarity with Docker concepts and commands

## Steps to Run Locally 
1. Clone the repository:
    
    ```git clone https://github.com/adexltd/lms-ecs-shop-nodejs-sample```

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

## Contact
For questions or feedback, contact the course instructor [Sagar Uprety](https://bio.link/sagaruprety) at [sagar.uprety@adex.ltd]. 