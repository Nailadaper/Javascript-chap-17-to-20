// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var innerArray1 = [];
// multiArray.push(innerArray1);
// var innerArray2 = [];
// multiArray.push(innerArray2);

// multiArray[0].push(1);  
// multiArray[1].push(2);
// console.log(multiArray);


// 2. Declare and initialize a multidimensional array 
// representing the following matrix:
// var multiArray = [ [0,1,2,3],[1,0,1,2], [2,1,0,1] ];
//     for(var i = 0; i < 3; i++){
//         for(var j = 0; j < 4; j++ ){
//             document.write(multiArray[i][j] + " ");
//         }
//         document.write("<br>");
//     }
//     3. Write a program to print numeric counting from 1 to 10.
        // for(var i = 1; i <=10; i++){
        // document.write( i + "<br>");
        // }
//         4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
//  var tableNum = +prompt("Enter a number to show its multiplication table");
//  var tableLength = +prompt("Enter length multiplication table");
//  document.write("Multiplication table of " + tableNum + " Length " + tableLength + "<br>")
//  for(var i = 1; i <=tableLength;i++){
//     document.write(tableNum + " x " + i + " = " + tableNum*i+ " <br> " );
//  }

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]..
// var fruits= ["apple","banana","mango","orange","strawberry"];
// for(var i = 0; i <= 4; i++){
// document.write(fruits[i] + "<br>")
// }
// document.write("<br>");
// for(var j = 0; j <= 4; j++ ){
// document.write("Element at index " + j + " is " +fruits[j] + "<br>");
// }

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// // a 
// document.write("<h2>" + "Counting" + ":" + "</h2>")
// for(var i = 1; i <= 15; i++)(
// document.write( i + "," + " " )
// );


// b //
// document.write("<h2>" + "Reverse Counting " + ":" + "</h2>")
// for(var i = 10; i >=1; i--){
// document.write(i + "," + " ")
// };


// c //
// document.write("<h2>" + "Even " + ":" + "</h2>")
// for(var i = 0; i <=20; i++){
// document.write(i++ + "," + " ")
// };


// d //
// document.write("<h2>" + " Odd " + ":" + "</h2>")
// for(var i = 1; i <= 19; i = i+2){
// document.write(i + "," + " ")
// }


// e //
// document.write("<h2>" + "Series " + ":" + "</h2>") 
// for(var i = 2; i <= 20; i++){
// document.write(i++ + "k" + "," + " ")
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search in bakery:");

// var check = false;
// for (var i = 0; i < A.length; i++) {
// if (A[i] === userInput) {
// found = true;
// break;
// }
// }

// if (check) {
// document.write(userInput + "is available in bakery");
// } else {
// document.write(userInput +"is not available in bakery.");
// }
// 8. Write a program to identify the largest number in the 
// given array.A = [24, 53, 78, 91, 12]
// A = [24, 53, 78, 91, 12]
// var largestNumber = A[0]
// for (var i = 0; i < A.length; i++){
// if(A[i] > largestNumber){
// largestNumber = A[i];
// }
// }
// document.write("Array Items: " + A + "," + "<br>")
// document.write("The largest number is " + largestNumber)
// 9. Write a program to identify the smallest number in the 
// given array.A = [24, 53, 78, 91, 12]

// A = [24, 53, 78, 91, 12]
// 	var smallestNumber = A[0]
	

// 	for (var i = 0; i < A.length; i++){
// 	if(A[i]< smallestNumber){
// 	smallestNumber = A[i]; 
// 	}
// 	}
// 	document.write("Array Items: " + A + "," + "<br>")
// 	document.write("The smallest number is " + smallestNumber)
//     10. Write a program to print multiples of 5 ranging 1 to 
//     100.
for(var i = 5; i <= 100; i = i+5){
document.write(i + "," + " " )
}






















