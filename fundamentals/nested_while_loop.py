i = 0
while i < 10:
    j = i
    while j < 10:
        print(j, end=" ")
        j += 1
    print()
    i += 1

# output
# 0 1 2 3 4 5 6 7 8 9
# 1 2 3 4 5 6 7 8 9
# 2 3 4 5 6 7 8 9
# 3 4 5 6 7 8 9
# 4 5 6 7 8 9
# 5 6 7 8 9
# 6 7 8 9
# 7 8 9
# 8 9
# 9

print("All the factorials with output")
i = 10
print("Getting factories up to", i)
while i > 0:
    factorial = 1
    j = i
    while j > 0:
        print(j, end=" ")
        factorial *= j
        j -= 1
        if j > 0:
            print("x", end=" ")
        else:
            print("=", end=" ")
    print(factorial)
    i -= 1

print("0 = 1")