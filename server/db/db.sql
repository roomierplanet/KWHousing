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
    'https://lh3.googleusercontent.com/proxy/I-wPbWLA_Aouy3cECcRIOnexa2Y6HAVYDn8MOnsqqbRU-EuU12iLwdnsTXWxSg98qpwsew6tUCXEFar8v__PcSDPpIi6g891hfv4xT8FZAZNf13gcUM_P3r6co9TSj6kyBtt0vIwQyfoM3ZO2kFuHRX_Uyf06mrF9HxIPXMmluCzr49IHJPTXtaLSTpnh-oxx-ldHcQ4'
);

CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    rating integer CHECK(rating >= 1 AND rating <= 5) NOT NULL,
    review text,
    review_date date NOT NULL DEFAULT CURRENT_DATE,
    property_id bigint REFERENCES properties(id) NOT NULL
);

INSERT INTO reviews (name, rating, review, property_id) 
VALUES ('Arnav Nagpal', 4, 'Sweet people, study rooms are pretty cool, and the location is great!', 1);


INSERT INTO reviews (name, rating, review, property_id) 
VALUES ('Shaan Mehta', 3, 'Good place it''s nice to live with my friend Arnav here. OMG so this one day the craziest thing happened. 
I was so excited to move in and they gave us all free pizza. The pizza was absolutely DELICIOUS. I ate the hell out of it and
couldn''t move for an hour! Best reason to live here!!', 1);

INSERT INTO reviews (name, rating, review, property_id) 
VALUES ('Ameya Dehade', 5, 'Just adding more reviews here!', 1);