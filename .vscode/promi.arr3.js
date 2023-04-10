const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve();
    },1000);
});
    const arr = [ promise1, Promise.resolve(300), Promise.resolve(500)];
    const promise123 = Promise.all(arr);

    const obj123 = [Promise.resolve(200), Promise.resolve(400), Promise.resolve(700)];