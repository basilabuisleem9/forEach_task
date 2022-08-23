// * Exercise 1: 
// * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Case:
// *    Test Case 1: doubleValues([1,2,3]) 
// *    Test Case 2: doubleValues([5,1,2,3,10])  
// *
// * Result: 
// * Test Case 1:  [2,4,6]
// * Test Case 2: [10,2,4,6,20]


const numbers = [5,1,2,3,10];

let double_number=[]

numbers.forEach((ele , i) => {

   double_number.push(numbers[i]*2) 

})
console.log(double_number)



// *
// *
// * Exercise 2:
// * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// *
// * Test Cases:
// *   onlyEvenValues([1,2,3]) 
// *   onlyEvenValues([5,1,2,3,10]) 
// * 
// * Result:
// *  Test Case 1:  [2]
// *  Test Case 2: [2,10]
// */






let arr = [ 5 ,4 ,6 ,1 ,8 ,16 ,9]
let new_rr = []



arr.forEach((a , e) =>{

    if ((arr[e]) % 2  == 0 ){
    new_rr.push(arr[e])
    
    }
})
console.log(new_rr)



/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
// function showFirstAndLast(arr){
   //Your Code Here
// }







let arr_2 = ['colt','matt', 'thim', 'udennmy']
let n_array_2 = []

arr_2.forEach((ele, f) => {

    let x = arr_2[f].length
    n_array_2[f] =( `${arr_2 [f] [0] }${arr_2 [f] [x-1]}`)
     
})
console.log(n_array_2)



/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
// function addKeyAndValue(arr,key,value){
    //Your Code Here
// }





var object=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

var new_ob = []

object.forEach((object)=>{

new_ob.push(object['title'] = 'instructor')

})
console.log(object)



// let obj = {name: 'Elie'}




// function addKeyAndValue (key_1 , value_1){

//     obj[key_1] = value_1 ;
//     return obj ;

// }console.log(addKeyAndValue ("titlsade" ,"asda"))







/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

// function vowelCount(str){
  //Your Code Here
// }




let str = 'oo aaaaa bdsf iii eee uu'

function vowelCount(str){

    var splitArr = str.toLowerCase().split("");

    var obj = {};

    var vowels = "aeiou";

    splitArr.forEach(function(letter){

        if(vowels.indexOf(letter) !== -1){

            if(obj[letter]){

                obj[letter]++;
                
            } else{

                obj[letter] = 1;
            }
        }
    });
    return obj;
}
console.log(vowelCount(str))






// let a = 0
// let u = 0
// let o = 0
// let i_1 = 0
// let e_1 = 0


// let word = 'I Am adsfkjakfsamfs sdfjsfnsjnfa i u e o ooo '

// let vowelCount_1 = {
    
// }

// word.forEach((woed , index) => {
    
//     if (word[g] === "a" ||word[g] === "A" ){
//             a+=1
//         }

// })

// console.log(a)

// function vowelCount (word) {

//     for (let g = 0 ; g < word.length ; g++){

//     if (word[g] === "a" ||word[g] === "A" ){
//             a+=1
//         }
//     if (word[g] === "u" ||word[g] === "U" ){
//             u+=1
//         }
//     if (word[g] === "o" ||word[g] === "O" ){
//             o+=1
//         }
//     if (word[g] === "i" ||word[g] === "I" ){
//             i_1+=1
//         }
//     if (word[g] === "e" ||word[g] === "E" ){
//             e_1+=1
//         }  

//     }
//     if (a > 0){
//         vowelCount_1['a'] = a
//     }
//     if (u > 0){
//         vowelCount_1['u'] = u
//     }
//     if(o > 0){
//         vowelCount_1['o'] = o
//     }
//     if(i_1 > 0){
//         vowelCount_1['i'] = i_1
//     }
//    if(e_1> 0){
//     vowelCount_1['e'] = e_1
//    }
    
   
//     console.log(vowelCount_1)
// }vowelCount (word)