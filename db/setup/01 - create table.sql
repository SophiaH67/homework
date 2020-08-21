CREATE TABLE homework.entries (
    ID int NOT NULL AUTO_INCREMENT,
    title varchar(255),
    tasks varchar(255),
    date BIGINT,
    link varchar(255),
    PRIMARY KEY( ID)
);