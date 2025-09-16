class Book:
    favs = []

    def __init__(self, title=None, pages=None):
        self.title = title
        self.pages = pages

    def __eq__(self, other):
        return self.title == other.title and self.pages == other.pages

    def write_books_to_file(books):
        file = open("input.txt", "w")
        for book in books:
            file.write(f"{book.title}\t{book.pages}\n")
        file.close()

    def __hash__(self):
        return hash(self.title)

    def log(self):
        print(self.title, self.pages)

    def isshort(self):
        return self.pages < 100

    def read_books_from_file():
        books = []
        file = None

        try:
            file = open("input.csv", "r")
            print("WILL NOT RUN because no file found")
            data = file.read().split('\n')
            file.close()

            for book in data:
                book_data = book.split("\t")
                if book.strip():
                    books.append(Book(book_data[0], int(book_data[1])))

        except FileNotFoundError as e:
            print("Error FINE NOT FOUND:", e)
        except OSError as e:
            print("Error: couldn't open file", e)
        except PermissionError as e:
            print("Error: with permission", e)
        except Exception as e:
            print("Error:", e)

        finally:
            if file:
                file.close()
        return books


Book.favs = Book.read_books_from_file()
print(Book.favs)
Book.favs.append(Book("The Digging-est Dog", 78))
Book.write_books_to_file(Book.favs)