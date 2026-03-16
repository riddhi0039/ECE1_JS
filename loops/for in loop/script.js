// for (key in object){
    //     //code to be executed.
    // }
    const person = {
        fname: "Ajay",
        lname: "Singh",
        age:25
    };
    for (let x in person ){
        console.log("person details:" + x + ";" + person[x])
    }