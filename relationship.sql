--## Skill 1: Rebuild the Relationships from the Video

-- ONE TO ONE : users and profile table

--create users table
CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
);

--create profile table
CREATE TABLE profiles(
id SERIAL PRIMARY KEY,
user_id INT UNIQUE,
bio TEXT,
FOREIGN KEY(user_id) REFERENCES users(id)
);

-- add data 
INSERT INTO users (name, email)
VALUES 
('Vera Larssson', 'vera@gmail.com'),
('Alexander Larsson', 'alexander@gmail.com');

--update users

UPDATE users
SET name = 'Aleksander Larsson'
WHERE email = 'alexander@gmail.com';

--delete data 

DELETE FROM users
WHERE id=1;

INSERT INTO users(name, email) 
VALUES ('Foo', 'foo@gmail.com');

INSERT INTO profiles (user_id, bio) 
VALUES (3,'loves coding');

INSERT INTO profiles (user_id, bio)
VALUES (2, 'loves reading');

-- join data

SELECT u.name, p.bio
FROM users u
JOIN profiles p
ON u.id = p.user_id;



--2 ONE TO MANY : books, authors tables

--create tables
CREATE TABLE authors (
id SERIAL PRIMARY KEY,
name VARCHAR(100) 
);


CREATE TABLE books (
id SERIAL PRIMARY KEY,
title VARCHAR(100),
author_id INT,
FOREIGN KEY(author_id )REFERENCES authors(id)
);

--add values

INSERT INTO authors (name) 
VALUES ('Mariana Enriquez');

INSERT INTO books (title, author_id)
VALUES 
('The Dangers of Smoking in Bed.', 1),
('Things We Lost in the Fire.', 1),
('A Sunny Place for Shady People.', 1),
('Our Share of the Night', 1);


--join 

SELECT authors.name, books.title
FROM authors
JOIN books
ON authors.id = books.author_id;


SELECT books.title, authors.name
FROM books
JOIN authors
ON books.author_id = authors.id;


--try to break it: (this is commented out so the the file can run)
--insert a book with an author_id that doesnt exist 

--INSERT INTO books (title, author_id)
-- VALUES ('Our Share of the Night', 2);

--ERROR: insert or update on table "books" violates foreign key constraint "books_author_id_fkey"
--Why: the key (author_id)=(2) doesnt exist in the table "authors".



--3. MANY TO MANY: students, courses, student_courses tables

-- create tables 

CREATE TABLE students(
id SERIAL PRIMARY KEY,
name VARCHAR(100)
);

CREATE TABLE courses (
id SERIAL PRIMARY KEY,
title VARCHAR(100)
);

CREATE TABLE student_courses(
student_id INT,
course_id INT,
PRIMARY KEY(student_id, course_id),
FOREIGN KEY(student_id) REFERENCES students(id),
FOREIGN KEY(course_id) REFERENCES courses(id)
);

--add values

INSERT INTO students(name)
VAlUES ('Tom'), ('Sara');

INSERT INTO courses (title)
VAlUES ('Math'), ('Science');

INSERT INTO student_courses(student_id, course_id)
VAlUES (1,1), (1,2), (2,1);

--join 

SELECT students.name, courses.title 
FROM students
JOIN student_courses ON students.id = student_courses.student_id
JOIN courses ON courses.id = student_courses.course_id;

--try to break it : (this is commented out so the the file can run)
--add the same student to the same couse twice

--INSERT INTO student_courses(student_id, course_id)
--VAlUES (1,1);

--ERROR:  duplicate key value violates unique constraint "student_courses_pkey"
-- Key (student_id, course_id)=(1, 1) already exists.
-- Why: the primary key is the pair (student_id, course_id), so the same pair can't appear twice


