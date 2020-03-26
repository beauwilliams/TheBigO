public class Exponential {

        public static void main(String[] args) {

                System.out.println("Starting...");
                int k = 2;
                int n = 5;
                //k^n so 2 to the power of 4 times = 32

                final long startTime = System.currentTimeMillis();
                for( int i = 0; i < Math.pow(k, n); i++) {
                        System.out.println("i is " + i);
                }
                final long endTime = System.currentTimeMillis();

                System.out.println("Took " + (endTime - startTime) 
                                + " milliseconds to complete");    
                System.out.println("This is an example of an exponential algorithm, where n is the input, and k is how many times bigger the algorithm will grow per input. if k were 2 and n were 3 it would be equivalent to O(n^2), so why have the two...? Well think of exponential as a beefed up polynomial algorithm with an extra 'input' k --the exponent, which allows you to specify how much bigger the algorithm will grow with each iteration, say if k=2 then the algorithm... doubles!");
        }
}
