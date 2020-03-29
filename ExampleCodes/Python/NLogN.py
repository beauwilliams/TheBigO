
print("Starting...")

import timeit

code_to_test = """
n = 8
i=1
for i in range(0, int(8), 1):
    j = 1
    while j<n:
        print("i is " + str(i) + " j is " + str(j))
        j = j * 2
"""

elapsed_time = timeit.timeit(code_to_test, number=1)
print("Took " + str(elapsed_time) + " seconds")
