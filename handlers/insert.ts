import { sqlite } from "../db";

export default async (email: string,) => {
    const sql = `INSERT INTO verification_code ( username ) VALUES ('${email}');`
    const query = sqlite.query(sql)
    query.run();
}
