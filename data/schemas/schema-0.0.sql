
-- script table
CREATE TABLE IF NOT EXISTS script (
    name VARCHAR(255) PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    verb VARCHAR(10) NOT NULL,
    sudo BOOLEAN NOT NULL DEFAULT 0
);




