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

 function multiplicationTable() {
    for (let i = 0; i<=10 ; i++) {
        for(let n = 0; n<=10; n++){
            console.log(i + "*" + n + "=" + n*i)
        }
    }
 }
 multiplicationTable()

 //works! doesn't look like a "table" but it doest list them 

 //3 - 