let array = [50, 30, 20, 15, 10, 8, 16, 16,100,200];

for(let j = 0; j < array.length; j++) {
    for(let i = 0; i < array.length - 1; i++) {
       swap(array[i], i, array[i+1], i+1, array);
    }
    console.log(array);
}



function swap (a, aPosition, b, bPosition, array) {
    if(a > b) {
        let temp = a;
        array[aPosition] = b;
        array[bPosition] = temp;
    }
}