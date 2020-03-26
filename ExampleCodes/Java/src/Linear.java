public class Linear {

        public static void main(String[] args) {

                System.out.println("Starting...");
                int n = 8;


                final long startTime = System.currentTimeMillis();
                for (int i = 0; i < n; i++) {
                        System.out.println("i is " + i);
                }
                final long endTime = System.currentTimeMillis();

                System.out.println("Took " + (endTime - startTime) 
                                + " milliseconds to complete");    
                System.out.println("This is an example of a linear algorithm O(n), this is probably the easiest to understand apart from constant, you know the drill, it runs as many times as n is in size!, this is O(8) n=8.. but we don't care about specifics, its just reffered to as O(n)");
        }
}
