const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve();
    },1000);
});
    const arr = [ promise1, Promise.resolve(300), Promise.resolve(500)];
