TRUNCATE TABLE users;

ALTER SEQUENCE id RESTART WITH 1;

INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Amit','amit@amit.com','password', 'WDI', '1900-01-02 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Tom','tom@tom.com','password', 'WDI', '1900-01-03 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Mark','mark@mark.com','password', 'WDI', '1900-01-04 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Sam','sam@sam.com','password', 'WDI', '1900-01-05 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Bhavika','bhavika@bhavika.com','password', 'WDI', '1900-01-06 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Alice','alice@alice.com','password', 'UXDI', '1900-01-07 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Bob','bob@bob.com','password', 'UXDI', '1900-01-08 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Carol','carol@carol.com','password', 'UXDI', '1900-01-09 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Dan','dan@dan.com','password', 'UXDI', '1900-01-10 00:00:00');
INSERT INTO users (name, email, password, course, createdAt)
  VALUES ('Stef','stef@stef.com','password', 'WDI', '1900-01-11 00:00:00');
