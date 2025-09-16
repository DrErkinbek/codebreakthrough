class Book:
    def __init__(self, title=None, pages=None):
        self.title = title
        self.pages = pages

    def __eq__(self, other):
        return self.title == other.title and self.pages == other.pages
    def __hash__(self):
        return hash(self.title)

    def log(self):
        print(self.title, self.pages)

    def isshort(self):
        return self.pages < 100

book1 = Book("Harry Potter", 30)

book2 = Book("Rich Dad poor Dad", 100)

book1.log()
print(book2.isshort())