public class NLogN {

        public static void main(String[] args) {

                System.out.println("Starting...");
                int n = 8;


                final long startTime = System.currentTimeMillis();
                for( int i = 0; i < n; i++) {
                        for( int j = 1; j < n; j = j*2) {
                        System.out.println("i is " + i + " j is " + j);
                        } 
                }
                final long endTime = System.currentTimeMillis();

                System.out.println("Took " + (endTime - startTime) 
                                + " milliseconds to complete");    
                System.out.println("This is an example of an N Log N algorithm O(n log n), its actually not that complicated! Take O(log) multiply it by O(n) and you have O(N * log N) Notice above we have two loops, can you tell which is which..? "); 
        }
}
