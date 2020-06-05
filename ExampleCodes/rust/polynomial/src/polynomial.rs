use std::time::Instant;

pub fn polynomial() {
    println!("Starting ... ");
    let n = 4;

    let start = Instant::now(); //records this instant

    //Polynomial Time Complexity Example - aka nested loop
    for i in 0..n {
        for j in 0..n {
            print!("i is ");
            print!("{}", i);
            print!(" j is ");
            println!("{}", j);
        }
    }

    let finish = Instant::now();

    print!("Took ");
    print!("{:?}", finish.checked_duration_since(start));
    print!(" To Complete");
}
