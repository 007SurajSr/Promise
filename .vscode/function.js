function sum (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve(200),500);
    });
}
const result = sum();
result.then((data)=> {
    for(let i=0; i<data; i++){
        console.log(i);
    }console.log(data);
})