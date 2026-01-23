CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    password varchar(100) NOT NULL,
    email varchar(200) NOT NULL unique,

    primary key (id)
);