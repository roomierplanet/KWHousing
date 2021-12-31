CREATE TABLE properties (
    id BIGSERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    address varchar(100) NOT NULL,
    rent_corp varchar(50) NOT NULL
);

INSERT INTO properties (name, address, rent_corp)
VALUES (
    'MyRez on Lester',
    '181 Lester St., N2L 0C2, Waterloo',
    'Off Campus Rez'
);

INSERT INTO properties (name, address, rent_corp)
VALUES (
    '201 Lester St.',
    '201 Lester St., N2L 3V6, Waterloo',
    'Accomod8u'
);

INSERT INTO properties (name, address, rent_corp)
VALUES (
    '255 Sunview St.',
    '255 Sunview St., N2L 3V8, Waterloo',
    'Accomod8u'
);

INSERT INTO properties (name, address, rent_corp)
VALUES (
    'Rez-One: Hespeler House',
    '252 Philip St., N2L 0E2, Waterloo',
    'Rez-One'
);

INSERT INTO properties (name, address, rent_corp)
VALUES (
    'Icon 330',
    '252 Philip St., N2L 3W9, Waterloo',
    'Icon'
);
