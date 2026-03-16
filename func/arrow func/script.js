// arrow function is a anonymous function
function add(a, b){
    console.log(a + b);
}

var add2 = (a, b) => {
    console.log(a + b);
};
add2(102, 20);

var add3 = (a, b) => console.log(a + b);
add3(100, 200);