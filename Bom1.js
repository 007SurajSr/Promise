// console.log("Printing before alert....");     // Alert
// const result = alert("Kindly be sincere and complete your assignments.");
// console.log(result);
// console.log("Printing after alert......");

// console.log("Printing before Alert .....");       //Prompt
// const result = prompt("Are you happy with your efforts?");
// console.log(result);
// console.log(typeof result);
// console.log("Printing after alert.....");

http://localhost:8080/dummy.html?id=12&name=suraj#demo

console.log(location.href);
console.log(location.protocol);
console.log(location.port);
console.log(location.origin);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

const result = confirm("Do you want to navigate to dummy html page?");
if(result) {
    location.href = "http://localhost:8080/dummy.html";
} 