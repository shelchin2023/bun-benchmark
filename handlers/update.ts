import { sqlite } from '../db';

export default async () => {
    const sql = `UPDATE verification_code SET username = 'abc' WHERE id =1`
    const query = sqlite.query(sql)
    const result = query.get();

}

