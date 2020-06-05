use std::time::Instant;
pub fn factorial_example() {
    //we need to add example at end as factorial name already used for import in a factorial trait
    println!("Starting ... ");
    let n: u32 = 4;
    let val: u32 = factorial_of_n(n);

    let start = Instant::now(); //records this instant

    //Factorial Time Complexity Example
    for x in 0..val {
        //note that val is the FACTORIAL of n, so our loop is running factorial n times hence factorial complexity
        println!("{}", x);
    }

    let finish = Instant::now();

    print!("Took ");
    print!("{:?}", finish.checked_duration_since(start));
    print!(" To Complete");
}

fn factorial_of_n(n: u32) -> u32 {
    let result: u32 = factorial::Factorial::factorial(&n);
    return result;
}
