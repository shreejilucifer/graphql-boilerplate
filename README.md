# GraphQL + NodeJS + MongoDB Boilerplate 🐣

## Dependencies 👨‍👩‍👧‍👦
- `graphql-yoga`
- `mongoose`
- `config`

## Install 🌬

First, clone the repo via git and install dependencies:

```bash
git clone https://github.com/shreejilucifer/graphql-boilerplate.git cool-app
cd cool-app
npm install
```

You can create a MongoDB database using Docker

```bash
  mkdir ~/data
  docker run -d -p 27017:27017 -v ~/data:/data/db mongo
  # Use Compass / Robo3T / mongo cli to create a new DB
  mongo localhost/mydb
```
<br>

Configure Database Credentials:
> Change DBURL in `config/default.json`

```json
{
  "DBURL": "mongodb://<dbuser>:<dbpassword>@<dbhost>/<dbname>"
}
```

## Development 🏗

> GraphQL Schema: `src/schema/schema.graphql`

> MongoDB Models: `src/db/models` 

```bash
  npm run start
```

Go to 
[GraphQL Playground](http://localhost:4000) on your Browser 🌏

_Development Flow:_
* For Queries 
  * Define Schema in `schema.graphql`
  * Add mongoose schema in `db/models`
  * Create Query function in `resolvers/queries` and import it to  `resolvers/index.js`
* For Mutations
  * Define Schema in `schema.graphql`
  * Create Mutation function in `resolvers/mutations` and import it to `resolvers/index.js`

#### Author: Shreeji Pedhadiya 👨🏻‍💻
