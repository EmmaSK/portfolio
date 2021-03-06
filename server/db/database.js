const chalk = require("chalk");
const Sequelize = require("sequelize");
const pkg = require("../../package.json");

// We'll need to reset the database many times while we're testing, and
// it'd be a major bummer if we lost all of the data that we made while
// playing aound with the app in the browser. We'll check to see if the node
// node environment is 'test', in which case we'll use the test database.
// Otherwise, the app connects with the normal database.
// const dbName = process.env.NODE_ENV === "test" ? `${pkg.name}-test` : pkg.name;
console.log(chalk.yellow(`Opening database connection to journal`));

// const db = new Sequelize(`postgres://localhost:5432/portfolio`, {
//   logging: false,
//   native: false,
// });

// module.exports = db;

const databaseName = pkg.name;
//  + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
  }
);
module.exports = db;
