const {readFile , writeFile} = require('fs');

console.log("begining with the loop ");

readFile('./father/first.txt' , 'utf8' , (error , result) => {
    if(error){
        console.log("Error is : " , error);
        return;
    }
    console.log("in first readfile : ");
    const first = result;
    readFile('./father/second.txt','utf8' , (error , result)=>{
        if(error){
            console.log("error B : " , error);
            return;
        }
        console.log("int second read file " );
        const second = result;
        writeFile('./father/file-async.txt' , `The one is ::  ${first} , The second is :: ${second}   ` , (error , result) => {
            if(error){
                console.log("err while writing : " , error);
            }
            console.log("I am in writing mode");
        })
    })
})

console.log("Starting next task");