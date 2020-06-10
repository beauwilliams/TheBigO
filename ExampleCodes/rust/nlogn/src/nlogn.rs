use std::time::Instant;
pub fn nlogn() {
    println!("Starting ... ");

    let n: u32 = 8; //n is 8
    let mut _j = 1; //using mutable variables cuz we are lazy
    let start = Instant::now(); //records this instant

    //NlogN Time Complexity Example
    for i in 0..n {
        print!("first loop value is: ");
        println!("{}", i);
        logarithmic(n); //see below comment in fn
    }
    let finish = Instant::now();

    print!("Took ");
    print!("{:?}", finish.checked_duration_since(start));
    print!(" To Complete");
}

fn logarithmic(n: u32) {
    //i spilt up the nlog n algorithm into a seperate function because when i nested the loops it printed i as 0 each time, despite running i for n loops.. not how you might be used to with say java nested loops

    let mut _j = 1;
    while _j < n {
        print!("second loop value is: ");
        println!("{}", _j);
        _j *= 2;
    }
}
