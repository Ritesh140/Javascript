const accountID = 274738
let accountEmail = "ritesh@gmail.com"
var accountPaasword = "74637"
accountCity = "Kanpur"
let accountState;

// accountID = 525 // it is not allowed
/* prefer not to use var
because of issue in block scope and functional scope

Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/
accountEmail="riteshrks@gmail.com"
accountPaasword="3140"
accountCity="Lucknow"

console.log(accountID)

console.table([accountID, accountEmail, accountPaasword,accountCity, accountState])

