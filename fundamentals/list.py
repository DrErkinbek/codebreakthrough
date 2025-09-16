# Array is a data structure consisting of collection of elements
# One dimensional array
# Two dimensional array [matrics or vector data]
# three dimensional array

age = [30, 31, 43]

names = ["Erkin", "Sagyn", "Useyin"]

my_favourite_things = ['workout in a gym', 32, ["netflix", "amazon prime"]]

my_favourite_things[2][1] = "coding"

print(my_favourite_things)

good = ["kale", "brocoli", "spinach"]
food = ["pizaa", "fries", "wings"]

good.extend(food)
print(good)

removed = good.pop(0)
print(removed, good)