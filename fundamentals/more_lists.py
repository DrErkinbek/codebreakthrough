work_days = ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"]

# Insert method add item to list by index
work_days.insert(2, "Wednesday")

# Remove item deletes element from list according to value
work_days.remove("Thursday")

print(work_days)

# Cleaning item from list with a for loop
backpack = ["pizza slice", "nunchucks", "pizza slice", "pizza slice", "sandwich from mcdonalds"]
for item in backpack[:]:
    if item == "pizza slice":
        backpack.remove(item)

print(backpack)

# reverse method for shifting list items back to start
print(backpack[::-1])