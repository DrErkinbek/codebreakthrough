def greet(name):
    print("hello")
    print(f"Welcome {name}")

greet("Erkinbek")

def example(pos1, pos2, pos3, /, either1, either2, *, keyword1, keyword2, keyword3):
    print("pos1", pos1)
    print("pos2", pos2)
    print("pos3", pos3)
    print("either1", either1)
    print("either2", either2)
    print("keyword1", keyword1)
    print("keyword2", keyword2)
    print("keyword3", keyword3)

example(1, 2, 3, 5, either1=4, keyword=8, keyword2=7, keyword1=6)