# project-for-sit725

## The post express app

[![CircleCI](https://img.shields.io/circleci/project/github/contentful/the-example-app.nodejs.svg)](https://circleci.com/gh/contentful/the-example-app.nodejs)

The node.js example app teaches the very basics of how to work with Contentful:

- used for courier service
- fast delivery
- reliable

The app demonstrates how decoupling content from its presentation enables greater flexibility and facilitates shipping higher quality software more quickly.

## Requirements

* Node 8
* Git


## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/komaldeep152/project-for-sit725
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.


## Use Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/komaldeep152/project-for-sit725
```

Step 2: Build the Docker image

```bash
docker build -t the-post-express.nodejs .
```

Step 3: Run the Docker container locally:

```bash
docker run -p 3000:3000 -d the-post-express.nodejs
```
