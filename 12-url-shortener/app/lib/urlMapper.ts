/*
- Do we give users the option to pick params? Ensure someone hasn't already used domain
- Generate a short string but also not used.
-- look up records 
-- keys are shortened URLs
-- values are long URLs
-- 
*/

/*
function that takes longUrl {

}
*/


// no guarantee we won't generate the same string twice
// db query with validation/error handling (ORM), need to get prisma working
// let the user submit a string, max character > 20 -> Error msg: "Buy a domain"


export const getRandom = () => {
  let hash = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // create for loop
  for (let i = 0; i < 5; i++) {
    // for each iteration up to 5, add element from charList to hash string
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
