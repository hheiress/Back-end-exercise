drop table if exists staff cascade;
drop table if exists languages cascade;
drop table if exists attendances cascade;
drop table if exists classes cascade;
drop table if exists modules cascade;
drop table if exists teachers cascade;
drop table if exists students cascade;

CREATE TABLE languages (
  id       SERIAL PRIMARY KEY,
  name     TEXT
);
select * from languages;

CREATE TABLE teachers (
  id       SERIAL PRIMARY KEY,
  name     TEXT NOT NULL,
  email    VARCHAR(20) NOT NULL,
  country  VARCHAR(30),
  language SERIAL REFERENCES languages(id)
);
select * from teachers;

CREATE TABLE staff (
  id       SERIAL PRIMARY KEY,
  name     TEXT NOT NULL,
  email    VARCHAR(20) NOT NULL,
  address  VARCHAR(120),
  years    VARCHAR(20) NOT NULL,
  bank_account  VARCHAR(15),
  phone_number  TEXT,
  position      TEXT,
  language      SERIAL REFERENCES languages(id)
);

CREATE TABLE students (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(30) NOT NULL,
  email    VARCHAR(20) NOT NULL,
  address  VARCHAR(120),
  phone_number  VARCHAR(120),
  batch     VARCHAR(9) check (batch in ('JUL2020-1', 'JUL2020-2', 'MAR2020-1', 'MAR2020-2', 'OCT2020-1', 'OCT2020-2')),
  status    TEXT check (status in ('Studying', 'Graduated', 'Dropped out'))
);

CREATE TABLE modules (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(20) NOT NULL,
  language  SERIAL REFERENCES languages(id)  
);

CREATE TABLE classes (
  id       SERIAL PRIMARY KEY,
  datetime TIMESTAMP NOT NULL,
  topic    SERIAL REFERENCES modules(id),
  teacher  SERIAL REFERENCES teachers(id)
);

CREATE TABLE attendances (
  id            SERIAL PRIMARY KEY,
  student_id    SERIAL REFERENCES students(id),
  class_id      SERIAL REFERENCES classes(id)
);