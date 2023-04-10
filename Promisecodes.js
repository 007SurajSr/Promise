const callback = (resolve,reject)=>{
    setTimeout(()=>{
        reject({
            name : "Sharad"
            
        });
    },4000)
}


let res = new Promise(callback);
console.log(res);
res.then((data)=>{
    console.log("Hey, I got resolved");
    console.log(data);
     
}).catch(err=>{
    console.log("Catch fired");
    console.log(err);
}).finally(()=>{
    console.log("Finally callback done");
})
