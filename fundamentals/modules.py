import math
import pickle
import queue
import heapq
import json
import random
import utils
# let create random rumber with the help of randint function
a = random.randint(7, 10)

# generate factorial of a with the help of factorial function
factorial_of_random_number = math.factorial(a)

# print(factorial_of_random_number)

# from custom module utils.py file we are using this function
print(utils.stats_range([1, -3, 5, -10, 20, 40]))