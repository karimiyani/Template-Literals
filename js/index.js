let note = "  I\'m 100 years old !";
console.log(note);
//I'm 100 years old !
  

let note2 = "  I\'m 100 \n years old !";
console.log(note2);
//I'm 100 
 //years old !


//  let note3 = "  I\'m 100 \n
//   years old !";
// console.log(note3);
//error


let note4 = " I\'m 100 \n" +  
"years old !";
console.log(note4);
// I'm 100 
//years old !

let note5 = ' I \'m 100 \n ' +  
'years \'old\' ! ';
console.log(note5);
// I 'm 100 
 //years 'old' ! 


 let note6 = ` I'm 100 


              years 'old' ! `;
console.log(note6);
//I'm 100 


        //years 'old' ! 



// backticks in function        
 function sayHi(name) {
     console.log(" hi " + name);
 }
 sayHi("gomnam");
 //hi gomnam

 function sayHi2(name2) {
    console.log(` hi ${name2} `);
}
sayHi2("gomnam");
//hi gomnam

function sayHi3(name3 ,lastName) {
    console.log(` hi ${name3} ${lastName}`);
}
sayHi3("gomnam" ,"karbala");
// hi gomnam karbala