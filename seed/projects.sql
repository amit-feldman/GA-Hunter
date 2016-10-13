TRUNCATE TABLE projects;

ALTER SEQUENCE id RESTART WITH 1;

INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('tictactoe', 'a fun js game', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 10);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('dice game', 'roll the dice', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 12);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('t rex chase', 'dinosaur tech', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 9);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('space invader', 'alien warfare', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 8);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('funtimes', 'have fun', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 7);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('movie search', 'find films', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 9);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('nonsense time', 'absurdist fun', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 16);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('cookie recipes', 'bake your heart out', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 16);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('gamify math', 'learn subtraction', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 13);
INSERT INTO
  projects (name, description, image, url, banner, upvote)
  VALUES ('personal brand', 'make a personal statement', 'http://www.fillmurray.com/200/200', 'www.yahoo.com', 12);
