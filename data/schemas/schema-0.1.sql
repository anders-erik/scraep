
-- script table
CREATE TABLE IF NOT EXISTS script (
    uuid VARCHAR(36) PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
    name VARCHAR(255) NOT NULL DEFAULT '',
    description VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    directory VARCHAR(255) NOT NULL DEFAULT '/',
    verb VARCHAR(10) NOT NULL, -- LEGACY: will be removed in next major version
    sudo BOOLEAN NOT NULL DEFAULT 0
);




