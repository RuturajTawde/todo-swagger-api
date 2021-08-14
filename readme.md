<h1 align="center">Swagger API: To-do list</h1>

## Try Out

- View documentation and test API - <https://ruturaj-swagger-todo.herokuapp.com/api-docs/>

## API Details

**Endpoint** - https://ruturaj-swagger-todo.herokuapp.com/api/v1/todo

**Method** - GET, POST, PUT, DELETE

**Headers** -

| key          | value                                |
| ------------ | ------------------------------------ |
| content-type | application/json                     |
| x-api-key    | d32a0a83-903e-4147-b399-f308c48f705e |

**Front End app** -

```
Visit: <https://todolist-ruturaj.herokuapp.com/
```

## **Rate Limit** - API has a rate limit of 25 requests per minute.

&nbsp;

&nbsp;

## Get Started With Development

**Install Dependencies**

```sh
# install the dependencies
npm install
```

**Set Environment Variable**

Create a .env file in the root directory. Add the following values -

```
DATABASE_URL=<MongoDB URL>
API_KEY=<Key to access API>
```

&nbsp;

## Run It

**Run in _development_ mode:**

Runs the application is development mode. Should not be used in production

```sh
# nodemon src/server.js
npm run dev
```

**Run in _production_ mode:**

Start App

```sh
# start: node src/server.js
npm start
```

Special thanks to github.com/imSidJ