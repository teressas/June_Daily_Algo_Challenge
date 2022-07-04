/*"discuss.leetcode.com" =>
d3 = com
d2 = leetcode.com
d1 = discuss.leetcode.com
cpdomain[i] 
format = rep d1.d2.d3 or rep d1.d2
rep = int from 1 - 10^4
d1/d2/d3 =  always be 1 lowercase letter in the cpdomain

cpdomains[rep, d1.d2.d3] => cpdomains["9001 discuss.leetcode.com"]
there will always be 1 cpdomain in the array


return an array of count-paired domains,
where cpdomains = [9001 com, 9001 leetcode.com, 9001 discuss.leetcode.com]

cpdomains = ["9001 discuss.leetcode.com"] 
// ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]

cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"] 
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"] 
loop: 
900 google.mail.com > rep = 900, d1 = google.mail.com, d2 = mail.com, d3= com
50 yahoo.com > rep = 50, d2 = yahoo.com, d3 = com
1 intel.mail.com > rep = 1, d3 = intel.mail.com, d2 = mail.com
5 wiki.org > rep = 5, d2 = wiki.org, d3 = org
map = { d1: rep, d2: rep, d3: rep}
{google.mail.com:900,  mail.com: 900, com: 900, yahoo.com : 50}
{google.mail.com:900,  mail.com: 900, com: 950, yahoo.com : 50, intel.mail.com : 1}
{google.mail.com:900,  mail.com: 901, com: 951, yahoo.com : 50, intel.mail.com : 1, wiki.org = 5, org = 5}
newArr = [val key] => [900 google.mail.com, 901 mail.com,  951 com, 50 yahoo.com, 1 intel.mail.com, 5 wiki.org, 5 org]
*/
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    // create a map to store key as domain and each time it encounter that domain add rep to the existing rep val
    // let map = new Map(),
    // count = 0,
    // domain = "";
    // // loop through array
    // for (let i = 0; i < cpdomains.length; i++) {
    //     // define rep
    //     // define d1, d2 and then d3
    //     count = cpdomains[i].split(" ")[0];
    //     domain = cpdomains[i].split(" ")[1].split(".");
    //     // console.log(domain)
    //     let domains;
    //     // console.log(domain.length - 1)
    //     for (j = domain.length - 1; j >= 0; j--) {
    //         if (domains) {
    //             domains = domain[j] + "." + domains
    //         } else {
    //             domains = domain[j]
    //         }
    //         // console.log(domains, domain[j])
    //         if(map.has(domains)) {
    //             map.set(domains, parseInt(map.get(domains)) + parseInt(count))
    //         } else {
    //             map.set(domains, count)
    //         }
    //         console.log(map)
    //     }
    // }
    // // loop through domain and create a new array to store [val, key] as each element

    // let result = [];
    // map.forEach((value, key) => {
    //     result.push(value + " " + key)
    // })
    // // return the arr
    // return result;

    const map = {};

    cpdomains.forEach(d => {
        let [count, domain] = d.split(' '); // [ '900', 'google.mail.com' ]
        while (domain) {
            map[domain] = (map[domain] || 0) + +count;
            // console.log(domain)
            // console.log(map)
            domain = domain.replace(/^[a-z]+\.?/, ''); // google.mail.com => mail.com => com 
            // console.log(domain)
        }
    });
    return Object.entries(map).map(([k,v]) => `${v} ${k}`);
    // Object.entries(map).map(entry => `${entry[1]} ${entry[0]}`);
};



cpdomains = ["9001 discuss.leetcode.com"]
// cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
console.log(subdomainVisits(cpdomains))