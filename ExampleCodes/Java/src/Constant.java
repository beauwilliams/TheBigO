public class Constant {

        //Starting off with basics
        //A constant time algorithm
        //Note O(1), O(2)..O(n) are considered
        //practically equal asymptotically

        public static void main(String[] args) {
                System.out.println("Starting...");

                final long startTime = System.currentTimeMillis();
                int n = 9000;
                System.out.println("n is " + n);
                System.out.println("Printing a second line");
                final long endTime = System.currentTimeMillis();
               
                System.out.println("Took " + (endTime - startTime) 
                               + " milliseconds to complete");
                System.out.println("This is an example of O(2), two operations of constant time --printing two lines, note that the size of n would have no affect on the complexity of this algorithm");
        }
}
