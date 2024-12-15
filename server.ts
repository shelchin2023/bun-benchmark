import { serve } from "bun";
import { db } from "./db/db";
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { nanoid } from 'nanoid/non-secure'
import request_email_code from "./handlers.ts/request_email_code";
migrate(db, { migrationsFolder: './db/migrations' });

const id = Math.random().toString(36).slice(2);

serve({
    port: process.env.PORT || 5000,
    development: false,

    // Share the same port across multiple processes
    // This is the important part!
    reusePort: true,

    async fetch(request) {
        const parsedUrl = new URL(request.url);
        const path = parsedUrl.pathname;

        if (path == "/request_email_code") {
            const id = nanoid()
            await request_email_code(id, id, id)
            return new Response("request_email_code ok from Bun #" + id + "!\n");
        }

        return new Response("Hello from Bun #" + id + "!\n");

    }
});