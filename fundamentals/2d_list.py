grades = [[6, 3, 5], [60, 43, 2, 60], [205]]

print(type(grades[0][1]))
print("--------------------------")
for inner_list in grades:
    for grade in inner_list:
        print(grade, end=" ")
    print()
print("--------------------------")
for i in range(len(grades)):
    for j in range(len(grades[i])):
        print(grades[i][j], end=" ")
    print()
print("--------------------------")

for inner_data in grades:
    if isinstance(inner_data, list):
        for grade in inner_data:
            print(grade, end=" ")
    else:
        print(inner_data)
    print

def print2d(data):
    for inner_data in data:
        if isinstance(inner_data, list):
            for item in inner_data:
                print(item, end=" ")
            else:
                print(inner_data, end=" ")
            print()

print("############################")
print2d(grades)