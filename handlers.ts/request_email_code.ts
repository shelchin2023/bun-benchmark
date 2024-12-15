import dayjs from "dayjs"
import { verification_code } from '../db/schema';
import { generateRandomNumber } from "../utils";
import { db } from "../db/db";

export default async (email: string, request_id: string, userip: string) => {
    // 插入一条发送记录
    const random = generateRandomNumber(4)

    try {
        // 记录到数据库
        await db.insert(verification_code).values({
            platform: 'email',
            username: email,
            verification_code: random,
            userip: userip,
            request_id: request_id,
            created_at: dayjs().toDate()
        });
        return new Response("ok", { status: 200 })
    } catch (e: any) {
        return new Response(e?.message ?? e, { status: 500 })
    }
}
