
import { integer, sqliteTable, text, blob, index, uniqueIndex } from "drizzle-orm/sqlite-core";


export const users = sqliteTable("users", {
    id: integer("id").primaryKey({
        autoIncrement: true,
    }),
    email: text("email").notNull().unique(),
    invited_by: text("invited_by"),
    invite_code: text("invite_code").notNull().unique(),
    created_at: integer("created_at", {
        mode: "timestamp_ms",
    })
        .notNull()
        .$defaultFn(() => new Date()),
}, (table) => {
    return [
        uniqueIndex("email_idx").on(table.email),
        uniqueIndex("invite_code_idx").on(table.invite_code),
        index("invited_by_idx").on(table.invited_by),
    ]
});


export const verification_code = sqliteTable("verification_code", {
    id: integer("id").primaryKey({
        autoIncrement: true,
    }),
    request_id: text("request_id").unique(),
    platform: text("platform").notNull(),
    username: text("username").notNull(),
    userip: text("userip").notNull(),
    verification_code: text("verification_code").notNull(),
    created_at: integer("created_at", {
        mode: "timestamp_ms",
    }).notNull()
        .$defaultFn(() => new Date()),
    was_sended: integer("was_sended").notNull().default(0),
    message_id: text("message_id"),
    sended_at: integer("sended_at", {
        mode: "timestamp_ms",
    }),
    was_verified: integer("was_verified").notNull().default(0),
    verified_at: integer("verified_at", {
        mode: "timestamp_ms",
    }),
}, (table) => {
    return [
        index("was_sended_idx").on(table.was_sended),
        index("request_id_idx").on(table.request_id),
        index("userip_idx").on(table.userip),
    ]

});