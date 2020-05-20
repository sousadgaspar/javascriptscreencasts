let FileSystem = require('fs');

FileSystem.writeFile("mypoem.txt", "This is what I've been trying to write in my heart.", error => {
    if (error) {
        console.log("It was not possible to write the file", error);
    } else {
        console.log("file written successfully");
    }
});

