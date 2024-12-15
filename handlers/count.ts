import { sqlite } from '../db';

export default async () => {
    const sql = `SELECT COUNT(*) AS value FROM verification_code`
    const query = sqlite.query(sql)
    const result = query.get();
    return result.value
}