const p = new Promise(resolve => {
    resolve(1);
    Promise.resolve(2).then(console.log);
});
p.then(console.log);

