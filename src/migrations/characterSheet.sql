CREATE TABLE characterSheet (
    id INT NOT NUll AUTO_INCREMENT,
    idUser INT NOT NULL,
    idCharacter INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (idUser) references user(id),
    FOREIGN KEY (idCharacter) references character(id)
);