//extension of back to it for javascript

//below i an example of making a function perfom a certain task

function ourFunctionwithArgs(a,b) {
    console.log(a -b);
}

ourFunctionwithArgs(10,5);  //when completed will output 5

//Global scope varables are variables that are set outside of a function and will run code inside any function below it
//Local scope variables are ties down to a set function they are set inside of
//It is Posiible to have a the same global and local variable  but the local variable will take presedence

//below is an example of both a local and global variable that are the same

var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);  //When console logged sweater will come first then T Shirt fill follow after
