//1 - print all even numbers from 0 - 10 

//  function printEvens(){
//     for (let i = 0; i <= 10; i++){
//         if (i%2 === 0) {
//             console.log(i);
//         }
//     };
//  };

//  printEvens();

//-----------------------------// 

 //2 - Print a table containing multiplication tables - this one seems hard 
 // but it's not really - I think i'm thrown by the word table - this doesnt need to be a grid I dont think 
 // first, let's just focus on getting all the multiplication solutions for 1 - 10 
 // to do this we will need take each number between 1 and 10 and multiply it by each other number between 1 - 10 
 // so 1 * 1, 1* 2, and 2 * 1, 2 * 2, etc. etc. 
 // we need to make a function that will do this 

 // step 1 - make the function = done! 
 // step 2 - for loop? - set it up same as last problem 

//  function multiplicationTable() {
//     for (let i = 0; i<=10 ; i++) {
//         for(let n = 0; n<=10; n++){
//             console.log(i + "*" + n + "=" + n*i)
//         }
//     }
//  }
//  multiplicationTable()

 //works! doesn't look like a "table" but it doest list them 

 //---------------------------------------------------------

 //3 - convert km to miles - there are 0.621371 miles in 1 km so to get how many miles in x km you need to 
 //multiply by 0.621etc

// let x = 5;

//  function kilometersToMiles(x) {
//     console.log(Math.round(x * 0.621371));
//  }

// kilometersToMiles(x);

//added Math.round to get the nearest whole number 

//-------------------------------------------------

//4 - calculate the sum of numbers in an array - need a for loop again? 

// let a = [1,2,3,4,5]

// function sumArray(a) {
//     let sum = 0;

//     for (let i=0; i<a.length; i++){
//         sum+= a[i]
//     }
//     console.log(sum)
// }

// sumArray(a);

//--------------------------------------------
//5 - create a function that reverses an array 



//--------------------------------------------
//6- sort an array from lowest to highest 

