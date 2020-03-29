
print("Starting...")

import timeit

code_to_test = """
n = 4
for i in range(0, int(n), 1):
    for j in range(0, int(n), 1):
        print("i is " + str(i) + " j is " + str(j))
"""

elapsed_time = timeit.timeit(code_to_test, number=5)
print("Took " + str(elapsed_time) + " seconds")
