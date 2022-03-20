for(let i=0;i<10;i++){
    console.log(i);
}

console.log("====== for of loop ======")

nums = [2,4,6,8,10];
for(let j of nums){
    console.log(j);
}

console.log("====== using for of loop ======")
nums2 = [23,44,25,22,56,11,18,19,29];
for(let i of nums2){
    if( i % 2 == 0){
        console.log(i);  
    }  
}