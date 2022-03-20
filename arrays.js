movies = ["annabella","conjuring","sabrina the dall","hunted night",
"now you see me","five destinaton","abcd","a aa","beta"];
// Indexing
console.log(movies[3]);
console.log(movies[2]);

// Slicing
console.log(movies.slice(1,4));
console.log(movies.slice(1,5));
console.log(movies.slice(1,10));

// this will give undefined
console.log(movies[77]);

// this will not give undefined
console.log(movies.slice(10,12));

// adding element
movies.push("paa");
console.log(movies);

// delete the element
 let ele = movies.pop("paa");
console.log(movies);

// remove element from between the arrays
movies.splice(2,2);
console.log(movies);


//  traversing arrays
console.log("====== traditional for loop ======");

for(let i=0;i<movies;i++){
    console.log(movies[i]);
}

console.log("====== for-of loop ======");
for(let mov of movies){
    console.log(mov);
}

// print movies having length smaller than 5

console.log("====== length of movie ======");
for(let mov of movies){
    if(mov.length<5){
        console.log(mov);
    }
}

