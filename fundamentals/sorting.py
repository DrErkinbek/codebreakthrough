# Sort method for lists

list_of_words = ["knife", "spoon", "fork", "plate", "bottle", "toster", "blender"]
# Sort method works by listing items according to alphabetic order
list_of_words.sort()
print(list_of_words)

unsorted_list_of_numbers = [124, 45, 234, 1245, 0, 82, 23, 1960]
# Sort number by value from small to big
unsorted_list_of_numbers.sort()
print(unsorted_list_of_numbers)

# Sorting with key
stuff = [True, False, 0, -1, "0", "1", "1", "10", 5 < 30, "20", "2", "5", "9001", "5.5", "6.0"]
print(sorted(stuff, key=float))