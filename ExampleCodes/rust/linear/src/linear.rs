use std::time::Instant;

pub fn linear() {
    println!("Starting ... ");
    let n = 8;

    let start = Instant::now(); //records this instant

    //Linear Time Complexity Example
    for x in 0..n {
        //basically a single plain old loop
        println!("{}", x);
    }

    let finish = Instant::now();

    print!("Took ");
    print!("{:?}", finish.checked_duration_since(start));
    print!(" To Complete");
}
