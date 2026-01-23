CREATE TABLE ability (
    id int unique not null AUTO_INCREMENT,
    name VARCHAR(100) not null,
    description VARCHAR(100) not null,
    type enum("Racial","Class Ability","Feat","Spell"),

    PRIMARY KEY (id)
);

CREATE TABLE spell (
    id int not null  AUTO_INCREMENT,
    componetTypes ("Verbal", "Somatical", "Material"),
    castingTime VARCHAR(60) not null,
    duration VARCHAR(60) not null,
    range VARCHAR(50) not null,
    conjurationClass enum ("WIZARD", "FIGHTER", "ROGUE", "CLERIC", "RANGER", "BARD", "WARLOCK", "DRUID", "BARBARIAN", "PALADIN", "SORCERER", "MONK", "ARTIFICER")
    spellType enum("EVOCATION", "CONJURATION", "DIVINATION", "ENCHANTMENT", "ILLUSION", "NECROMANCY", "TRANSMUTATION"),
    resistance VARCHAR(24) not null,
    school VARCHAR(24) not null,

    id_ability int not null AUTO_INCREMENT,

    PRIMARY KEY (id),
    foreign KEY (id_ability) references ability (id)
    
);