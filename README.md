# GraphQL + NodeJS + MongoDB Boilerplate 🐣

## Dependencies
- `graphql-yoga`
- `mongoose`
- `config`

## Install

First, clone the repo via git and install dependencies:

```bash
git clone https://github.com/shreejilucifer/graphql-boilerplate.git cool-app
cd cool-app
npm install
```

Configure Database Credentials:
> Change DBURL in `config/default.json`

```json
{
  "DBURL": "mongodb://<dbuser>:<dbpassword>@<dbhost>/<dbname>"
}
```

## Development

> GraphQL Schema: `src/schema/schema.graphql`
> MongoDB Models: `src/db/models`

```bash
  npm run start
```

Go to 
[GraphQL Playground](http://localhost:4000) on your Browser 🌏

#### Author: Shreeji Pedhadiya 👨🏻‍💻
