import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';


const sqlite = new Database('sqlite.db');
sqlite.run('pragma busy_timeout = 5000;');
sqlite.run('PRAGMA journal_mode=WAL;');

const db = drizzle(sqlite);

export { db, sqlite };