const { readFile, writeFile } = require("fs").promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFil


const start = async () => {
    try {
        const first = await readFile("./father/first.txt" , 'utf8' );
        const second = await readFile('./father/second.txt','utf8');
        await writeFile('./father/util-fs-promises.txt',`Fir : ${first} and Sec: ${second}`,{flag:'a'});
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
};

start();

// const getContent = (path) => {
    //   return new Promise((resolve, reject) => {
        //     readFile(path, "utf8", (err, data) => {
            //       if (err) {
                //         reject(err);
//       } else {
    //         resolve(data);
//       }
//     });
//   });
// };

// getContent('./father/file-async.txt').then((result) => console.log(result)).catch((error)=> console.log(error));