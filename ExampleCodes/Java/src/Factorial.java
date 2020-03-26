public class Factorial {

        public static void main(String[] args) {

                System.out.println("Starting...");
                int n = 4;
                int nFactorial = 1;
                //calculating n factorial with a loop i.e 
                //if n = 4, 4! (factorial) is 4*3*2*1 = 24
                //if it were 5! = 5*4*3*2*1 = 120
                for (int i = n; i > 0; i--) {
                        nFactorial = nFactorial * i;
                }
                //NOTE the above loop is not a part of the
                //factorial algorithm, we are simply using it because
                //I don't know how to calculate factorial
                //in the demonstration loop itself
                //but we are providing the factorial of n
                //which means it will run n factorial times
                //the result we want!!


                final long startTime = System.currentTimeMillis();
                for( int i = 0; i < nFactorial; i++) {
                        System.out.println("i is " + i);
                }
                final long endTime = System.currentTimeMillis();

                System.out.println("Took " + (endTime - startTime) 
                                + " milliseconds to complete");    
                System.out.println("This is an example of a factorial algorithm. Its the slowest kind of this lot!! These algorithms take a value n and iterate n! (n-factorial) times. i.e if n is 7 then n! = 7*6*5*4*3*2*1 = 5040. That means if n is 7 the algorithm runs 5040 times! That is a far cry from 7 times for a linear algorithm, for example!");
        }
}
