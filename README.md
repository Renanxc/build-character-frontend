# Build Character Frontend
This repository contains an Frontend that consumes Build Character Backend to create a session of a build of your own Character.

# Dependencies
install the following technologies before you start
- Node (v12)
- npm

# Folder Structure
```
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── server.js
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── formCharacter
│   │   │   └── FormCharacter.vue
│   │   ├── formUser
│   │   │   └── FormUser.vue
│   │   ├── shared
│   │   │   └── navbar
│   │   │       └── Navbar.vue
│   │   └── viewCharacter
│   │       └── ViewCharacter.vue
│   ├── css
│   │   └── main.css
│   ├── main.js
│   ├── routes.js
│   └── services
│       ├── build
│       │   └── BuildService.js
│       ├── buildOption
│       │   └── BuildOptionService.js
│       └── user
│           └── UserService.js
└── webpack.config.js
```

# Set up
Clone the branch to your computer (git clone git@github.com:Renanxc/build-character-frontend.git)

Then you can follow the next steps:

# Start Locally
```
1. Install dependencies
$ npm install

2. Package build.js (webpack)
$ npm run build

3. Run build.js
$ npm run start

4. Open browser and access localhost:8080
http://localhost:8080
```

# You can also see the integrated enviroment
```
1. Open this link:
https://build-character-frontend.herokuapp.com/

2. You can create 5 different sessions e create their builds.
 
3. Navigate and recriate or change profiles.

4. The session was setted to 1h
```