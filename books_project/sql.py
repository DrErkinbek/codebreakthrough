import sqlite3
conn = sqlite3.connect("books.db")

c = conn.cursor()

c.execute('''
          CREATE TABLE books(
			  title TEXT,
			  pages INTEGER
		  )
          ''')

c.execute("SELECT * FROM books")
print(c.fetchall())

c.execute("DELETE FROM books WHERE title = ?", ("Rich Dad poor dad"))

conn.commit()

c.execute("SELECT * FROM books")
print(c.fetchall())