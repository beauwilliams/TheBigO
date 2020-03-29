print("Starting...")

import timeit

code_to_test = """
import math
k = 2
n = 4
for i in range(0, int(math.pow(k,n)), 1):
    print("i is " + str(i))
"""

elapsed_time = timeit.timeit(code_to_test, number=1)
print("Took " + str(elapsed_time) + " seconds")
