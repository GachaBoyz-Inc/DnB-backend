CREATE TABLE IF NOT EXISTS users (
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

    PRIMARY KEY (id)
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
    componetTypes enum("Verbal", "Somatical", "Material"),
    castingTime VARCHAR(60) not null,
    duration VARCHAR(60) not null,
    distance VARCHAR(50) not null,
    conjurationClass enum ("WIZARD", "FIGHTER", "ROGUE", "CLERIC", "RANGER", "BARD", "WARLOCK", "DRUID", "BARBARIAN", "PALADIN", "SORCERER", "MONK", "ARTIFICER"),
    spellType enum("EVOCATION", "CONJURATION", "DIVINATION", "ENCHANTMENT", "ILLUSION", "NECROMANCY", "TRANSMUTATION"),
    resistance VARCHAR(24) not null,
    school VARCHAR(24) not null,

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS characters (
    id INT NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    skillsId int not null, 
    attributesId int not null,
    raceId int NOT NULL,
    classId int NOT NULL,
    name varchar(200) NOT NULL,
    backstory varchar(2000) NOT NULL,
    appearance varchar(500) NOT NULL,
    ideals varchar(500) NOT NULL,
    objectives varchar(500) NOT NULL,
    bonds varchar(500) NOT NULL, 
    flaws varchar(500) NOT NULL,
    personalityTraits varchar(500) NOT NULL,
    backgroundId int NOT NULL,
    playerName varchar(100) NOT NULL,

    proficiencyBonus int not null,
    armorClass int not null,
    initiative int not null,
    speed int not null,
    maxHp int not null,
    currentHp int not null,
    tempHp int not null,
    notes TEXT, 
    level int NOT NULL,

    primary key (id)
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
    characterId INT NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS attributes (
    id INT NOT NULL AUTO_INCREMENT,
    strength INT NOT NULL DEFAULT 0,
    dexterity INT NOT NULL DEFAULT 0,
    constitution INT NOT NULL DEFAULT 0,
    intelligence INT NOT NULL DEFAULT 0,
    wisdom INT NOT NULL DEFAULT 0,
    charisma INT NOT NULL DEFAULT 0,
    constitution INT NOT NULL DEFAULT 0,
    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS savingThrows (
    id INT NOT NULL AUTO_INCREMENT,
    strength INT NOT NULL DEFAULT 0,
    dexterity INT NOT NULL DEFAULT 0,
    constitution INT NOT NULL DEFAULT 0,
    intelligence INT NOT NULL DEFAULT 0,
    wisdom INT NOT NULL DEFAULT 0,
    charisma INT NOT NULL DEFAULT 0,
    constitution INT NOT NULL DEFAULT 0,
    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS item (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type ENUM('Weapon', 'Armor', 'Potion', 'Equipment', 'Consumable', 'Tool', 'Junk', 'Misc') NOT NULL,

    PRIMARY KEY (id)
);

create TABLE IF NOT EXISTS character_items (
    id INT NOT NULL AUTO_INCREMENT,
    characterId INT NOT NULL,
    itemId INT NOT NULL,
    
    PRIMARY KEY (id)
);

create TABLE IF NOT EXISTS character_abilities (
    id INT NOT NULL AUTO_INCREMENT,
    characterId INT NOT NULL,
    abilityId INT NOT NULL,
    
    PRIMARY KEY (id)
);

ALTER TABLE characters
  ADD CONSTRAINT fk_characters_race
    FOREIGN KEY (raceId) REFERENCES race(id),
  ADD CONSTRAINT fk_characters_class
    FOREIGN KEY (classId) REFERENCES class(id),
  ADD CONSTRAINT fk_characters_background
    FOREIGN KEY (backgroundId) REFERENCES background(id),
  ADD CONSTRAINT fk_characters_user
    FOREIGN KEY (user_id) REFERENCES users(id),
  ADD CONSTRAINT fk_characters_skills
    FOREIGN KEY (skillsId) REFERENCES skills(id),
  ADD CONSTRAINT fk_characters_attributes
    FOREIGN KEY (attributesId) REFERENCES attributes(id);

ALTER TABLE skills
  ADD CONSTRAINT fk_skills_character
    FOREIGN KEY (characterId) REFERENCES characters(id);

ALTER TABLE character_items
  ADD CONSTRAINT fk_character_items_characterId_characters
    FOREIGN KEY (characterId) REFERENCES characters(id),
  ADD CONSTRAINT fk_character_items_itemId_item
    FOREIGN KEY (itemId) REFERENCES item(id);

ALTER TABLE character_abilities
  ADD CONSTRAINT fk_character_abilities_characterSheetId_characters
    FOREIGN KEY (characterId) REFERENCES characters(id),
  ADD CONSTRAINT fk_character_abilities_abilityId_ability
    FOREIGN KEY (abilityId) REFERENCES ability(id);