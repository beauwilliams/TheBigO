use std::time::Instant; //notes from docs
                        //only allows comparing duration between two instants
pub fn constant() {
    println!("Starting ... ");

    let now = Instant::now(); //records this instant

    //Constant Time Complexity Example
    let n = 9000; //this takes constant time to complete
    println!("{}", n);

    let new_now = Instant::now();

    print!("Took ");
    print!("{:?}", new_now.checked_duration_since(now)); //rust is wierd and puts Some in front so cant have test exactly like the rest of the examples
    print!(" To Complete");
}
