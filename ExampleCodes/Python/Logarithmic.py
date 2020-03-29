print("Starting...")

import timeit

code_to_test = """
n = 16
i=1
while i<n:
    print("i is " + str(i))
    i = i * 2
"""

elapsed_time = timeit.timeit(code_to_test, number=5)
print("Took " + str(elapsed_time) + " seconds")
