DROP DATABASE IF EXISTS squid_pro_quo_db;
CREATE DATABASE squid_pro_quo_db; 

\c squid_pro_quo_db; 

CREATE TABLE motorcycles (
    id SERIAL PRIMARY KEY, 
    owner TEXT NOT NULL, 
    make TEXT NOT NULL, 
    model TEXT NOT NULL, 
    year INT NOT NULL,
    odometer INT NOT NULL,
    is_new BOOLEAN DEFAULT FALSE,
    mods TEXT,
    title_on_hand BOOLEAN DEFAULT FALSE,
    price INT NOT NULL,
    city TEXT NOT NULL,
    state VARCHAR(2) NOT NULL
);
