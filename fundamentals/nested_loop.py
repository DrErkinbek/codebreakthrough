for i in range(10):
    for j in range(10):
        print(i*j, end="\t")
print()


array = [1, 2, 3, 4, 5, 6, 7]

for i in range(len(array)):
    for j in range(i, len(array)):
        print(array[i:j+1], end=" ")
    print()


all_possible = []
for i in range(len(array)):
    for j in range(i, len(array)):
        all_possible.append(array[i:j+1])
print("---------------------------------")
print(all_possible)