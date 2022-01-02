CREATE TABLE properties (
    id BIGSERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    address varchar(100) NOT NULL,
    rent_corp varchar(50) NOT NULL,
    img_url text NOT NULL
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    'MyRez on Lester',
    '181 Lester St., N2L 0C2, Waterloo',
    'Off Campus Rez',
    'https://lh3.googleusercontent.com/proxy/e_JdWXtTZSMZwALWvG8Hlt-j9nogOZbt9BjvJNzehgRxXryE9VHNZlIR6TthnVLld6pCg9FUdDla0B2OW6agsNPgOWWPC8BDV68iOw639cNhLb0W0RYzrCbvSb4ec4DlyG8TABxEHDZen1aozRS6043FG4qmuhWO4cnhGQ'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    '201 Lester St.',
    '201 Lester St., N2L 3V6, Waterloo',
    'Accomod8u',
    'https://static.wixstatic.com/media/29eef9_6fbb7d55b0774ba4be939ca5bad4e1d4~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01/29eef9_6fbb7d55b0774ba4be939ca5bad4e1d4~mv2.webp'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    '255 Sunview St.',
    '255 Sunview St., N2L 3V8, Waterloo',
    'Accomod8u',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/280711634.jpg?k=59b4fa26353d9d42fd0c3fb58c8333d7d4732bfa527ead445cd563596ac80c35&o=&hp=1'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    'Rez-One: Hespeler House',
    '252 Philip St., N2L 0E2, Waterloo',
    'Rez-One',
    'https://www.jddevelopment.ca/media/files/2020/Hespeler%20House[2].png'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    'Icon 330',
    '252 Philip St., N2L 3W9, Waterloo',
    'Icon',
    'https://lh3.googleusercontent.com/proxy/QFAOXU1oubJrVMa2F-M7Gk1vAegg2a4e6IW7QofKAlK30CshXsRxTRT2twso1Ve69OYaE63fcueKABFLeOvY33qlZ7_DqLJb_4ctzMF-dwpn60bYY9sopZ3BMcE4dEjKwtFmWpek9g-F7e3CyF1UXbemQ5Wh9et9axr0wqWHTnXNFbArIhuSbf0ocHjp4diLP7oQLqb_'
);
