
-- script table
CREATE TABLE IF NOT EXISTS script (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL DEFAULT '',
    description VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    directory VARCHAR(255) NOT NULL DEFAULT '/',
    verb VARCHAR(10) NOT NULL, -- LEGACY: will be removed in next major version
    sudo BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS script_tag (
    script_id INTEGER NOT NULL,
    tag VARCHAR(255) NOT NULL,
    PRIMARY KEY (script_id, tag),
    FOREIGN KEY (script_id) REFERENCES script(id) ON DELETE CASCADE
);

-- object for which we want to pull status information, e.g. if a piece of software is installed, version, running, etc. 
CREATE TABLE IF NOT EXISTS status_object (
    name VARCHAR(255) PRIMARY KEY

);

