const fs = require('fs');

//create a file

// fs.writeFile('example.txt', "this is an example", (error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log('File successfully created!');
//         fs.readFile('example.txt', "UTF-8",(err, file) => {
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file)
//             }
//         })
//     }
// });


// fs.rename('example2.txt', 'example1.txt', (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("Renamed the file!")
//     }
// })

// fs.appendFile('example1.txt', 'some data being appended', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// })

// fs.unlink('example1.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('successfully deleted the file');
// })

// fs.mkdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else{
//         console.log('successfully made the folder')
//         fs.writeFile('./tutorial/txt1.txt', "this is an example", (err)=> {
//             if (err){
//                 console.log(err)
//             } else {
//                 console.log("Successfully Made!")
//             }
//         })
//     }
// });


fs.readdir("tutorial", (err, files) => {

    if (err){
        console.log(err);
    }else{
        files.forEach((file)=> {
            fs.unlink("./tutorial/" + file, (err) => {
                if (err){
                    console.log(err)
                } else {
                    console.log("success!")
                }
            })
        })
    }
})