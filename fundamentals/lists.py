backpack = ["pizza", "frozen custard", "apple crisp", "kale chips", "apple crisp", "frozen custard", "pizza", "candy"]

if "pizza" in backpack:
    print("get a ranch sauce")

search = "kale chips"

if search in backpack:
    print(backpack.index("kale chips"))

healthy = {"kale chips", "broccoli"}
healthy_backpack = [item for item in backpack if item in healthy]
print(healthy_backpack)


squares = [i*i for i in range(10) if i % 2 == 0]
print(squares)

uniques = set(backpack)

for item in uniques:
    print(backpack.count(item))

count = [[backpack.count(item), item] for item in uniques]
print(count)