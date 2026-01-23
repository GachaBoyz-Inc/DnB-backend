CREATE TABLE attributes (
    id INT NOT NUll AUTO_INCREMENT,
    strength INT NOT NULL,
    dexterity INT NOT NULL,
    intelligence INT NOT null,
    wisdom INT NOT NULL,
    charisma INT NOT NULL,
    characterId INT NOT NULL,

    PRIMARY KEY (id),
    foreign key (characterId) references character(id)
);