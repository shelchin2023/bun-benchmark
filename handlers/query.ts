import { sqlite } from '../db';

export default async () => {
    const sql = `SELECT *  FROM verification_code where id =1`
    const query = sqlite.query(sql)
    const result = query.get();
    return result
}