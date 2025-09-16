msg = "Pay attention to each word that I say..."
words = msg.split()

print(words)
msg="this, is, important, data"
print(msg.split(','))

print('List out your favorite foods separated by ", "')
print("Example input:")
print("Kale, bok choy, brussel sprouts")

foods = [food.strip() for food in input().split(",")]

for food in foods:
    print(food)

print("List out your favorite food one line at a time")
fav_foods = []

while True:
    fav = input("Enter a food. Q to quit, R remove item: ")
    if fav.lower() == 'q':
        break
    if fav.lower() == 'r':
        print(f"Popped off: {fav_foods.pop()}")
        print(f"favourtites now: {fav_foods}")
    fav_foods.append(fav)
print(fav_foods)