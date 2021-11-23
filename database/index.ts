import pgPromise from "pg-promise";

const pgp = pgPromise({});
const config = {
  db: {
    host: "localhost",
    port: 5432,
    database: process.env.NEXT_PUBLIC_DATABASE,
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    max: 10, // size of the connection pool
    query_timeout: 60000, // 60sec
  },
};

export const sqlExecuter = pgp(config.db);
