print("Starting...")

import timeit

code_to_test = """
n = 4
nFactorial = 1

for i in range(int(n), 0, -1):
    nFactorial = nFactorial * i


for i in range(0, int(nFactorial), 1):
    print("i is " + str(i))
"""

elapsed_time = timeit.timeit(code_to_test, number=1)
print("Took " + str(elapsed_time) + " seconds")
