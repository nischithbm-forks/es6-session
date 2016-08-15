//Use of var
function hello(){
    if( 5 > 4 ){
        var a = 7;
        console.log(" var a: ", a);
    }
    console.log("var a: ", a);
}
hello();

//Use of let
function hello(){
    if( 5 > 4 ){
        let a = 7;
        console.log("let a: ", a);
    }
    console.log("let a: ", a);
}
hello();

//Use of  constant
function hello(){
  if( 5 > 4 ){
    const a = 7;
  }const a = 7;
   console.log("const a: ", a);
}
hello();

