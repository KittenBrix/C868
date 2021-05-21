import { Global } from "../common/types/global";
import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import ClockifyRoutes from '../routes/clockify';
// import * as mysql from 'mysql2/promise';
const Database = require('better-sqlite3');
import bodyParser = require('koa-bodyparser');

const app:Koa = new Koa();

// create global variables for all routes to use :)
declare var global: Global;
global.headers = {};
global.envPath = "/Users/lucasphillips/Documents/WGU/C868_new/.env";
require('dotenv').config({path: global.envPath});
global.getSQLiteDB = async (value:string) => {
  return new Database(value);
};
( async () => {
  global.clockifyDB = await global.getSQLiteDB(process.env.DB_FILE_CLOCKIFY);
  global.discordDB = await global.getSQLiteDB(process.env.DB_FILE_DISCORD);
  global.studentDB = await global.getSQLiteDB(process.env.DB_FILE_STUDENT);
})();

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});

app.use(bodyParser());

// log response timings so we know what's happening :)
app.use(async function responseTime(ctx, next) {
  const t1 = Date.now();
  await next();
  const t2 = Date.now();
  ctx.set('X-Response-Time', Math.ceil(t2 - t1) + 'ms');
});


// Initial route
// app.use(async (ctx:Koa.Context) => {
//   ctx.body = 'Hello world';
// });

// Make sure the route has access to a database connection if it's needed
// app.use(async function mysqlConnection(ctx, next) {
//   try {
//     ctx.state.db = await global.dbPool.getConnection();
//     ctx.state.db.connection.config.namedPlaceholders = true;
//     // Traditional mode ensures not null is respected for unsupplied fields
//     await ctx.state.db.query('SET SESSION sql_mode = "TRADITIONAL"');
//     await next();
//     ctx.state.db.release();
//   } catch (e) {
//     if (ctx.state.db) ctx.state.db.release();
//     throw e;
//   }
// });

// We don't use the below because we have multiple databases now, not just the one.
// app.use(async function sqliteConnection(ctx, next) {
//     try {
//       ctx.state.db = global.getSQLiteDB();
//       await next();
//     } catch (e) {
//       throw e;
//     } finally {
//       try{
//         ctx.state.db.close();
//       } catch (err) {}
//     }
//   });

app.use(ClockifyRoutes);

// Application error logging.
app.on('error', console.error);

export default app;