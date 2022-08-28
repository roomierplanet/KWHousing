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
    'https://res.cloudinary.com/arnavnagpal/image/upload/v1660188237/Exterior-05-myREZ-on-Lester_ge7dcm.jpg'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    '201 Lester St.',
    '201 Lester St., N2L 3V6, Waterloo',
    'Accomod8u',
    'https://res.cloudinary.com/arnavnagpal/image/upload/v1660188164/29eef9_5b8ea418f5bf464c97690cf46e491844_mv2_jvhzp3.jpg'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    '255 Sunview St.',
    '255 Sunview St., N2L 3V8, Waterloo',
    'Accomod8u',
    'https://res.cloudinary.com/arnavnagpal/image/upload/v1660188252/546_13__1_odxy6y.jpg'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    'Rez-One: Hespeler House',
    '252 Philip St., N2L 0E2, Waterloo',
    'Rez-One',
    'https://res.cloudinary.com/arnavnagpal/image/upload/v1660188207/fergushouse_rzl0ax.jpg'
);

INSERT INTO properties (name, address, rent_corp, img_url)
VALUES (
    'Icon 330',
    '252 Philip St., N2L 3W9, Waterloo',
    'Icon',
    'https://res.cloudinary.com/arnavnagpal/image/upload/v1660188196/maxresdefault_d6i2zh.jpg'
);

CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    user_id varchar(100) NOT NULL,
    rating integer CHECK(rating >= 1 AND rating <= 5) NOT NULL,
    review text,
    review_date date NOT NULL DEFAULT CURRENT_DATE,
    property_id bigint NOT NULL
);

ALTER TABLE reviews
ADD CONSTRAINT reviews_property_id_fkey
FOREIGN KEY(property_id)
REFERENCES properties(id)
ON DELETE CASCADE;

INSERT INTO reviews (name, user_id, rating, review, property_id) 
VALUES ('Arnav Nagpal', 'google-oauth2|117396793460697106457', 4, 'Sweet people, study rooms are pretty cool, and the location is great!', 5);


INSERT INTO reviews (name, rating, review, property_id) 
VALUES ('Shaan Mehta', 3, 'Good place it''s nice to live with my friend Arnav here. OMG so this one day the craziest thing happened. 
I was so excited to move in and they gave us all free pizza. The pizza was absolutely DELICIOUS. I ate the hell out of it and
couldn''t move for an hour! Best reason to live here!!', 1);

INSERT INTO reviews (name, rating, review, property_id) 
VALUES ('Ameya Dehade', 5, 'Just adding more reviews here!', 1);