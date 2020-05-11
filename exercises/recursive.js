
function test (n) {
    if (n > 0) {
        console.log(n);

        test (n - 1);
    }

}


test(4);