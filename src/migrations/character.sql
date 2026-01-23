CREATE TABLE character (
    id INT NOT NULL AUTO_INCREMENT,
    sheetId int NOT NULL,
    name varchar(200) NOT NULL ,
    backstory varchar(2000) NOT NULL,
    appearance varchar(500) NOT NULL,
    ideals varchar(500) NOT NULL,
    objectives varchar(500) NOT NULL,
    bonds varchar(500) NOT NULL, 
    flaws varchar(500) NOT NULL,
    personalityTraits varchar(500) NOT NULL,
    raceId int NOT NULL,
    classId int NOT NULL,
    backgroundId int NOT NULL,
    playerName varchar(100) NOT NULL,
    level int NOT NULL,

    primary key (id)
    foreign key (sheetId) references characterSheet(id)
    foreign key (raceId) references race(id)
    foreign key (classId) references class(id)
    foreign key (backgroundId) references background(id)
);