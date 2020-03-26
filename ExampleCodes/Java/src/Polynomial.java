public class Polynomial {

        public static void main(String[] args) {

                System.out.println("Starting...");
                int n = 4;


                final long startTime = System.currentTimeMillis();
                for( int i = 0; i < n; i++) {
                        for( int j = 0; j < n; j++) {
                        System.out.println("i is " + i + " j is " + j);
                        } 
                }
                final long endTime = System.currentTimeMillis();

                System.out.println("Took " + (endTime - startTime) 
                                + " milliseconds to complete");    
                System.out.println("This is an example of a Polynomial time algorithm O(n^p) with n=4 meaning 16(n^2) iterations, its dead easy to understand ! take O(n) --a linear algorithm and multiply that by O(n) again and you have O(n^2) i.e take n and multiply it by n and you have... n squared! The important thing to note here is differences between O(n^2).. O(n^3).. and so on. The LARGER the power, the slower that algorithm. ..Now how can we make this code above O(n^3)..? Yep, just add another for loop!");
        }
}
