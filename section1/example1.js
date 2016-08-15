//Spread operator:  expanded in place
var fruitArray = ["Apple", "Orange", "Grapes"];
var allFruit = ["Water Melon", ...fruitArray, "Mango"];
console.log(allFruit);

//Spread element can be used with push method
var evenArray = [2, 4, 6, 8, 10];
var oddArray = [3, 5, 7, 9];
evenArray.push(...oddArray);
console.log("All elements: ",evenArray);

//REST parameters are not spread
function add (...numbers){
    var sum  = 0;
    for(var i =0; i<numbers.length; i++){
        console.log( typeof numbers[i])
        sum  = sum + numbers[i];
        console.log("sum",sum)
    }
    return sum;
}
add(2)
add(2, 3)
add(2, 3, 5)