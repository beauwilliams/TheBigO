print("Starting...")

import timeit

code_to_test = """
n = 10
for i in range(0, int(n), 1):
    print("i is " + str(i))
"""

elapsed_time = timeit.timeit(code_to_test, number=5)
print("Took " + str(elapsed_time) + " seconds")
