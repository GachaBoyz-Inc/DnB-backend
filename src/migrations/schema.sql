CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    password varchar(100) NOT NULL,
    email varchar(200) NOT NULL unique,

    primary key (id)
);

CREATE TABLE IF NOT EXISTS class (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(60) NOT NULL,
    description varchar(1000) NOT NULL,
    hpDice varchar(8) NOT NULL,
    proficiencies varchar(600),
    skills varchar(1000) NOT NULL,
    equipment varchar(600) NOT NULL,

    PRIMARY KEY (id);
);

CREATE TABLE IF NOT EXISTS race (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    skills VARCHAR(100) NOT NULL,
    abilities VARCHAR(600) NOT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS background (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100),
    skills VARCHAR(100),
    equipment VARCHAR(600),

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS ability (
    id int unique not null AUTO_INCREMENT,
    name VARCHAR(100) not null,
    description VARCHAR(100) not null,
    type enum("Racial","Class Ability","Feat","Spell"),

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS spell (
    id int not null  AUTO_INCREMENT,
    name VARCHAR(100) not null,
    description varchar(1000) not null,
    componetTypes ("Verbal", "Somatical", "Material"),
    castingTime VARCHAR(60) not null,
    duration VARCHAR(60) not null,
    range VARCHAR(50) not null,
    conjurationClass enum ("WIZARD", "FIGHTER", "ROGUE", "CLERIC", "RANGER", "BARD", "WARLOCK", "DRUID", "BARBARIAN", "PALADIN", "SORCERER", "MONK", "ARTIFICER")
    spellType enum("EVOCATION", "CONJURATION", "DIVINATION", "ENCHANTMENT", "ILLUSION", "NECROMANCY", "TRANSMUTATION"),
    resistance VARCHAR(24) not null,
    school VARCHAR(24) not null,

    PRIMARY KEY (id);
);

CREATE TABLE IF NOT EXISTS character (
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

    proficiencyBonus int not null,
    armorClass int not null,
    initiative int not null,
    speed int not null,
    maxHp int not null,
    currentHp int not null,
    tempHp int not null,

    skillsId int not null, 
    attributesId int not null,

    notes TEXT, 

    user_id int NOT NULL,
    level int NOT NULL,

    primary key (id)
    foreign key (sheetId) references characterSheet(id)
    foreign key (raceId) references race(id)
    foreign key (classId) references class(id)
    foreign key (backgroundId) references background(id)
    foreign key (user_id) references user(id)
    foreign key (skillsId) references skills(id)
    foreign key (attributesId) references attributes(id)
);

CREATE TABLE IF NOT EXISTS skills (
    id INT NOT NULL,  
    acrobatics INT NOT NULL DEFAULT 0,
    arcana INT NOT NULL DEFAULT 0,
    athletics INT NOT NULL DEFAULT 0,
    perfomance INT NOT NULL DEFAULT 0,
    deception INT NOT NULL DEFAULT 0,
    stealth INT NOT NULL DEFAULT 0,
    history INT NOT NULL DEFAULT 0,
    intimidation INT NOT NULL DEFAULT 0,
    insight INT NOT NULL DEFAULT 0,
    investigation INT NOT NULL DEFAULT 0,
    animalHandling INT NOT NULL DEFAULT 0,
    medicine INT NOT NULL DEFAULT 0,
    nature INT NOT NULL DEFAULT 0,
    perception INT NOT NULL DEFAULT 0,
    persuasion INT NOT NULL DEFAULT 0,
    sleightOfHand INT NOT NULL DEFAULT 0, 
    religion INT NOT NULL DEFAULT 0,
    survival INT NOT NULL DEFAULT 0,
    characterSheetId INT NOT NULL,
    characterId INT NOT NULL,
    PRIMARY KEY (id) REFERENCES characterSheet(id),
    FOREIGN KEY (characterId) REFERENCES character(id)
);

CREATE TABLE IF NOT EXISTS attributes (
    id INT NOT NULL AUTO_INCREMENT,
    strength INT NOT NULL DEFAULT 0,
    dexterity INT NOT NULL DEFAULT 0,
    constitution INT NOT NULL DEFAULT 0,
    intelligence INT NOT NULL DEFAULT 0,
    wisdom INT NOT NULL DEFAULT 0,
    charisma INT NOT NULL DEFAULT 0,
    characterSheetId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (characterSheetId) REFERENCES characterSheet(id)
);

CREATE TABLE IF NOT EXISTS item (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type ENUM('Weapon', 'Armor', 'Potion', 'Equipment', 'Consumable', 'Tool', 'Junk', 'Misc') NOT NULL,

    PRIMARY KEY (id)
);

/*
CREATE TABLE IF NOT EXISTS armor (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type ENUM('Weapon', 'Armor', 'Potion', 'Equipment', 'Consumable', 'Tool', 'Junk', 'Misc') DEFAULT ('Armor') NOT NULL,
    armorClass INT NOT NULL,
    stealthDisadvantage BOOLEAN NOT NULL,
    item_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);
*/

/*
CREATE TABLE IF NOT EXISTS defense_equipment (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type ENUM('Weapon', 'Armor', 'Potion', 'Equipment', 'Consumable', 'Tool', 'Junk', 'Misc') DEFAULT ('Equipment')NOT NULL,
    armorClassBonus INT NOT NULL,
    item_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);
*/

/*
CREATE TABLE IF NOT EXISTS weapon (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type ENUM('Weapon', 'Armor', 'Potion', 'Equipment', 'Consumable', 'Tool', 'Junk', 'Misc') DEFAULT ('Weapon') NOT NULL,
    damage VARCHAR(50) NOT NULL
    range VARCHAR(50) NOT NULL,
    item_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);
*/

create TABLE IF NOT EXISTS character_sheet_items (
    id INT NOT NULL AUTO_INCREMENT,
    characterSheetId INT NOT NULL,
    itemId INT NOT NULL,
);

create TABLE IF NOT EXISTS character_sheet_abilities (
    id INT NOT NULL AUTO_INCREMENT,
    characterSheetId INT NOT NULL,
    abilityId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (characterSheetId) REFERENCES characterSheet(id),
    FOREIGN KEY (abilityId) REFERENCES ability(id)
);





