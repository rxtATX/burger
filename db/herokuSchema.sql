CREATE TABLE IF NOT EXISTS burgers (
id INT AUTO_INCREMENT NOT NULL
, burger_name VARCHAR(30) NOT NULL
, devoured BOOLEAN NOT NULL
, date TIMESTAMP
, PRIMARY KEY (id)
);