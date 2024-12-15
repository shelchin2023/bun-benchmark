CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`invited_by` text,
	`invite_code` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_invite_code_unique` ON `users` (`invite_code`);--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `invite_code_idx` ON `users` (`invite_code`);--> statement-breakpoint
CREATE INDEX `invited_by_idx` ON `users` (`invited_by`);--> statement-breakpoint
CREATE TABLE `verification_code` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`request_id` text,
	`platform` text NOT NULL,
	`username` text NOT NULL,
	`userip` text NOT NULL,
	`verification_code` text NOT NULL,
	`created_at` integer NOT NULL,
	`was_sended` integer DEFAULT 0 NOT NULL,
	`message_id` text,
	`sended_at` integer,
	`was_verified` integer DEFAULT 0 NOT NULL,
	`verified_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `verification_code_request_id_unique` ON `verification_code` (`request_id`);--> statement-breakpoint
CREATE INDEX `was_sended_idx` ON `verification_code` (`was_sended`);--> statement-breakpoint
CREATE INDEX `request_id_idx` ON `verification_code` (`request_id`);--> statement-breakpoint
CREATE INDEX `userip_idx` ON `verification_code` (`userip`);