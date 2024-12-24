const { readFile, writeFile } = require("fs");

readFile("./father/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log("error is : ", error);
    return;
  }
  const first = result;
  console.log(result);
  readFile("./father/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log("error is : ", error);
      return;
    }
    const second = result;
    console.log(result);
    writeFile('./father/file-async.txt' , `This is async file result ${first} ,, {second}` , (error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("result of write is : " , result);
    })
  });
});
