//Q1 

//Q2

//Q3 

//Q4 

//Q4 - sample - sumDividibleByK 

/* you are given an array of integers a and an intefer k.
your task is to calculate the number of ways to pick teo different 
indicies i < j, such that a[i] + a[j] is divisible by k.*/

//you're looking for a sum of 2 numbers that is a number divisible by k 

/* example: 
for a = [1,2,3,4,5] and k = 3, the output should be: 
sumsDivisibleByK(a,k) = 4;

there are 4 pairs of numbers that sum to a multiple of k = 3: 
a[0] + a[1] = 1 + 2 = 3
a[0] + a[4] = 1 + 5 = 6
a[1] + a[3] = 2 + 4 = 6
a[3] + a[4] = 4 + 5 = 9
*/

// brute force approach: go through every combination of 2 numbers 
//and see if they are divisible by k - not efficient (his example python)

/* optimal approach: 

instead of doing all the division - just keep track of the remainders between dividing
 each number in the array by the given k 
allows us to steo through every number once and build a 
collection to find the verious remainders 

not trying to return the pairs - just care how many are there 

common optimization - read the problem carefully to understand what I need to return 
*/
