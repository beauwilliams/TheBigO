public class Logarithmic {

        //lets introduce a for loop, but instead of
        //just running through the loop
        //one by one all the way to the end
        //we will double the value of i each time
        //meaning we will reach the end of the loop sooner
        //this is the second lowest complexity class behind
        //constant time
        public static void main(String[] args) {

                System.out.println("Starting...");

                final long startTime = System.currentTimeMillis();
                int n = 16;
                for (int i = 1; i < n; i = i*2) {
                        System.out.println("i is now " + i);
                }
                final long endTime = System.currentTimeMillis();

                System.out.println("Took " + (endTime - startTime) 
                                + " milliseconds to complete");
                System.out.println("This is an example of O(log 16) with 4 iterations as shown, note that this is O(log n) and int n here is 16");
        }



}
