/*
Take a url string as input, and hash it somehow

combine the url and the desired shortened string

hash that combo

save the hash
*/
export const getRandom = () => {
  let hash = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //create for loop
  for (let i = 0; i < 5; i++) {
    //for each iteration up to 5, add element from charList to hash string
    hash += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  console.log(hash);
};

/* 
- get value of url field through props?
- use getRandom function to generate hash
- 
*/
export const setUrl = () => {
  
};

/*
Get the URL from a hash

*/
