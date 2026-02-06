
# Scraep

## Database

The data is always stored in a sqlite3 database with the following tables:

- script 
    - id: integer primary key
    - name: text
    - content: text
    - is_sudo: boolean
    - created_at: datetime
    - updated_at: datetime


- flag (key-value pairs associated with a specific script, )
    - id: integer primary key
    - script_id: integer foreign key references script(id)
    - order: integer (first flag has order 0, second flag has order 1, etc.)
    - name: text
    - value: text
    - created_at: datetime
    - updated_at: datetime


- run
    - id: integer primary key
    - script_id: integer foreign key references script(id)
    - status: text
    - output: text
    - created_at: datetime

