CREATE TABLE IF NOT EXISTS users (
	user_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	username varchar(30) UNIQUE,
	email varchar(255) UNIQUE
);

CREATE TABLE IF NOT EXISTS posts (
	post_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	user_id int REFERENCES users(user_id),
	title varchar(255) NOT NULL,
	body text NOT NULL,
	created_at timestamp DEFAULT current_timestamp
);

SELECT * FROM users;

INSERT INTO posts (user_id, title, body)
VALUES (2, 'Will Postgres reuse IDs', 'I am confused'),
		(2, 'How does FK work?', 'I heard it was important?'),
		(3, 'Should I get my masters degree', 'currently in middleschool')
		
INSERT INTO users (username, email)
VALUES ('ERKIN', 'erkin@gmail.com'),
		('avataylor', 'ava@gmail.com'),
		('emma', 'emma@gmail.com')