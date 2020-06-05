import timeit

print("Starting...")

code_to_test = """
n = 9001
print("n is " + str(n))
"""

elapsed_time = timeit.timeit(code_to_test, number=50)
print("Took " + str(elapsed_time) + " seconds")
