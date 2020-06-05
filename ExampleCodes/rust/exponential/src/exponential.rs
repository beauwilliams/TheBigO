use num_traits::Pow;
use std::time::Instant;
pub fn exponential() {
    println!("Starting ... ");
    let k: u32 = 2;
    let n: u32 = 5;
    Pow::pow(k, n);
    //k^n so to to power of 5 = 32 operations

    let now = Instant::now(); //records this instant

    //Constant Time Complexity Example
    for x in 0..Pow::pow(k, n) {
        println!("{}", x);
    }

    let new_now = Instant::now();

    print!("Took ");
    print!("{:?}", new_now.checked_duration_since(now));
    print!(" To Complete");
}
