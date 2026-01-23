CREATE TABLE class (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(60) NOT NULL,
    description varchar(1000) NOT NULL,
    hpDice varchar(8) NOT NULL,
    proficiencies varchar(600),
    skills varchar(1000) NOT NULL,
    equipment varchar(600) NOT NULL,

    PRIMARY KEY (id);
);