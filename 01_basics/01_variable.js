const accountId = 123456
let accountEmail = "waqasalpha89@gmail.com"
var accountPassword = "12345"
accountCity = "islamabad"
let accountState

// accountId = 2 // not allowed

accountEmail  = "wiki121gamil.com"
accountPassword = 12456
accountCity = "rawalpindi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountPassword, accountCity, accountEmail, accountState])