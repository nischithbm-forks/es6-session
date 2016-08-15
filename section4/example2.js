function bye(){
    console.log("Inside bye");
}

function  hello( n = bye){
   console.log(n())
}

hello();
