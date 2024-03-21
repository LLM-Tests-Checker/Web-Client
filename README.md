# LLM Test Checker

This is an application witch is client for our service. 
Web app has built with React framework, using service-sliced architecture.
This app is in hosts white-list for mono-backend.


### Setup

- install nodejs, npm, npx and docker
- after cloning change dir to app root
- `npm i`
- `npm start` or `make run`


### Author

- jussiar


### How to contribute?

- `git clone {repo_url}` (if not already done)
- `git checkout main`
- `git fetch && git pull`
- `git checkout -b feature/{user}/{feature_name}`
- write your feature and commit it
- push your branch with `git push -u {branch}`
- create pull-request to main and wait for review
- after accepting the review merge your PR


### Structure

```
├── public
└── src
    ├── application
    ├── core
    │   ├── components
    │   ├── constants
    │   ├── hooks
    │   ├── layout
    │   ├── models
    │   ├── styles
    │   ├── types
    │   └── utils
    ├── pages
    ├── scripts
    ├── services
    │   ├── auth
    │   │   ├── api
    │   │   ├── components
    │   │   └── utils
    │   ├── landing
    │   │   ├── assets
    │   │   └── components
    │   └── tests
    │       ├── api
    │       └── components
    └── storage
        ├── browser
        └── redux
```
