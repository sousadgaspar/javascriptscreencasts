let list = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];
let begin = 0;
let end = list.length - 1;
let searchValue = 3;
let steps = 0;


while (end >= begin) {
    let med = (begin + end) / 2;
    ++steps;
    if (searchValue == list[med]) {
        console.log("Found", searchValue);
    }

    if (searchValue > list[med]) {
        begin = med + 1;
    }
    else {
        end = med - 1;
    }
}

console.log("Total steps", steps);
