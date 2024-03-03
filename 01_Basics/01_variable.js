const accountId=123
let accountEmail ="div@google.com"
var accountpassword="1234"
//(let and var both used for variable)
/*Prefer not to use var
because of issue in block scope and functional scope*/
accountCity="pune"
let accountState;
/*In js if value is not defined then result will be undefined*/
accountEmail="anku@gmail.com"
accountpassword="765"
accountCity="delhi"

console.log(accountCity)
console.log(accountId)
console.log(accountEmail)
console.log(accountpassword)
console.table([accountpassword,accountCity,accountEmail,accountState]);