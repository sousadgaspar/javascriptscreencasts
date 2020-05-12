let list = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];
let begin = list[0];
let end = list.length;
let key = 100;

let med = (begin + end)/2;

while (end >= begin) {
    console.log("looping");
    console.log(begin);
    console.log(end);
    if(med == key) {
        console.log("found", list[med]);
    } else if (key > med) {
        begin = med + 1;
    } else if (key < med) {
        end = med - 1;
    }
    else {
        console.log("not found", key);
    }
}
