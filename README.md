
# Create Mysql database - Name - mail_system_db

# create table in database - run following:

1. yarn install

2. create db and table in mysql:

CREATE DATABASE email_service_db;
CREATE  TABLE IF NOT EXISTS `email_service_scema` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `smtp_host` VARCHAR(50) DEFAULT NULL,
  `smtp_types` VARCHAR(255) DEFAULT NULL,
  `smtp_port` INT UNSIGNED DEFAULT 0,
  `reply_to_type` TINYINT UNSIGNED DEFAULT 0,
  `message_per_day` TINYINT UNSIGNED DEFAULT 0,
  `imap_setting_smtp_types` VARCHAR(255) DEFAULT NULL,
  `imap_setting_smtp_port` INT UNSIGNED DEFAULT 0,
  `imap_setting_reply_to_type` TINYINT UNSIGNED DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
# engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;



Start server by typing :
Yarn dev

Then go to http://localhost:8100/graphql

