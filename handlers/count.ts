import { verification_code } from '../db/schema';
import { count } from "drizzle-orm";
import { db } from "../db/db";

export default async () => {
    const total: any = await db.select({ value: count(verification_code.id) }).from(verification_code)
    return total[0].value
}
