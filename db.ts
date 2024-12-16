import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
export { sqlite };