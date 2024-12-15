import { integer, sqliteTable, text, blob, index, uniqueIndex } from "drizzle-orm/sqlite-core";

export const verification_code = sqliteTable("verification_code", {
    id: integer("id").primaryKey({
        autoIncrement: true,
    }),
    username: text("username").notNull(),
}, (table) => {
    return [
    ]
});