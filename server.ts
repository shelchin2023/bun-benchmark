import { serve } from "bun";
import { db } from "./db";
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { nanoid } from 'nanoid/non-secure'
import insert from "./handlers/insert";
import count from "./handlers/count";
import query from "./handlers/query";
migrate(db, { migrationsFolder: './migrations' });

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

        if (path == "/insert") {
            await insert("hi@openai.com")
            return new Response("request_email_code ok from Bun #" + id + "!\n");
        }

        if (path == "/count") {
            const total = await count()
            return new Response(`${total} ok from Bun #` + id + "!\n");
        }

        if (path == "/query") {
            const result = await query()
            return new Response(`${result.id} ${result.username} ok from Bun #` + id + "!\n");
        }

        return new Response("Hello from Bun #" + id + "!\n");

    }
});