DROP TABLE `users`;--> statement-breakpoint
DROP INDEX `verification_code_request_id_unique`;--> statement-breakpoint
DROP INDEX `was_sended_idx`;--> statement-breakpoint
DROP INDEX `request_id_idx`;--> statement-breakpoint
DROP INDEX `userip_idx`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `request_id`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `platform`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `userip`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `verification_code`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `was_sended`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `message_id`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `sended_at`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `was_verified`;--> statement-breakpoint
ALTER TABLE `verification_code` DROP COLUMN `verified_at`;