CREATE TABLE entries (
    ID int NOT NULL AUTO_INCREMENT,
    title varchar(255),
    tasks varchar(255),
    date BIGINT,
    status SMALLINT,
    link varchar(255)
);