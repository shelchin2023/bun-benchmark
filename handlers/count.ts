import { sqlite } from '../db';

export default async () => {
    const sql = `SELECT COUNT(*) AS value FROM verification_code`
    const query = sqlite.query(sql)
    const result = query.all();
    return result[0].value
}
