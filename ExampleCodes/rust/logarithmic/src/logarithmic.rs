use std::time::Instant;
pub fn logarithmic() {
    println!("Starting ... ");

    let n: u32 = 16;
    let mut i = 1;
    let start = Instant::now(); //records this instant

    //Logarithmic Time Complexity Example
    while i < n {
        println!("{}", i);
        i *= 2; //the value of i doubles each time, i.e speed doubles
    }

    let finish = Instant::now();

    print!("Took ");
    print!("{:?}", finish.checked_duration_since(start));
    print!(" To Complete");
}
