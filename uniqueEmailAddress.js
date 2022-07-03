/* Analyze the elements in the email and check how many emails there actually are based on the rules stated.
"alice@leetcode.com" => alice       @ leetcode.com
                        local name      domain name

legal email => 
local@domain.com
local.l@domain.com
local+l@domain.com
lo.cal+l@domain.com

if local has ".", remove "."
"alice.z@leetcode.com" => "alicez@leetcode.com"                      

if local has "+", everything after 1st "+" will be ignored
"m.y+name@email.com" => remove "." and "+name" => "my@email.com"

emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
test.email+alex@leetcode.com => testemail@leetcode.com
test.e.mail+bob.cathy@leetcode.com => testemail@leetcode.com
Output: 2

test.email+alex@leetcode.com => testemail@leetcode.com
test.e.mail+bob.cathy@leetcode.com => testemail@leetcode.com
testemail+david@lee.tcode.com => testemail@lee.tcode.com
{testemail@leetcode.com: 1; testemail@lee.tcode.com: 1 }

emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
{a@leetcode: 1; b@leetcode.com: 1; c@leetcode.com: 1}

email array will always have 1 email or email[i]
email[i] will always have 1 lowercase char, "+", "." or "@"
local and domain will Not be empty => 
(empty local)@domain.com
local/ local@ / local.l@ / local+l@
Local names do not start with a '+' character. => +local@domain.com

*/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    // initalize a set to store the email address 
    const set = new Set();
    // loop through emails arr
    for(let email of emails){
        // use a helper funct to return the email address based on the rules and add it to the set
        const address = correctAddress(email);
        set.add(address);
        // console.log(set)
    }
    return set.size;
    // return the size of the set at the end of loop
    
};

function correctAddress(email) {
    // split the address by "@" and define the local and domain name
    let [local, domain] = email.split("@");
    // console.log([local, domain]);
    // remove "." and strings after "+" from each email
    
    // console.log(local.replace(/(\.)|(\+.*)/g,""))
    local = local.replace(/(\.)|(\+.*)/g,"")
    // console.log(local + "@" + domain)
    return local + "@" + domain // testemail@leetcode.com
}
// local.replace(/\.|\+/g,"") => testemailalex
// local.replace(/\.|\+./g,"") =>   testemaillex
// local.replace(/\.|\+.*/g,"") /  => testemail
// local.replace(/(\.)|(\+.*)/g,"") => testemail

// emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
console.log(numUniqueEmails(emails));