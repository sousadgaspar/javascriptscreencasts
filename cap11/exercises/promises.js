
let fifteen = Promise.resolve(15);
fifteen.then((val) => console.log(`${val}`), (val) => console.log(`${val} Eu estou aqui`));

