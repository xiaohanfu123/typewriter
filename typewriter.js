const sentence = "hello there from lighthouse labs";
let delay = 0
for (const char of sentence) {
  
  setTimeout(() => {
  process.stdout.write(char);// print the char here
}, delay) 
 delay+=100
 
}

setTimeout(() => {
  console.log(''); //let (console.log) output the /newline.
}, delay) 

 // <= 1s delay to make it noticeable. Can dial it down later.