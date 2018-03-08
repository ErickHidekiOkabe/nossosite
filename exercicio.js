let a = [10, 20, 30];
let i = 0;

for(let b of a){
   i += b;
   b++;

   if(i % 2 == 0){
     i--;
   }
}

console.log(i);