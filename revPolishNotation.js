/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {

    let lookupVal = [];
    let lookupOper = [];
    let result = 0;

    const operList = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '*' : (a,b) => a * b,
        '/' : (a,b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)
    }

    for(let i = 0 ; i < tokens.length; i++){
        let token = tokens[i];
        if(token in operList){
            lookupOper.push(token);
        } else {
            lookupVal.push(Number(token));
        }
        if(lookupVal.length >= 2 && lookupOper.length) {
            let secondVal = lookupVal.pop();
            let firstVal = lookupVal.pop();
            let oper = lookupOper.pop();
            result = operList[oper](firstVal, secondVal);
            // console.log(result);
            lookupVal.push(result)
        }
    }
    return lookupVal.pop();
};

tokens = ["2", "1", "+", "3", "*"]
console.log(evalRPN(tokens));

tokens2 = ["4", "13", "5", "/", "+"]
// console.log(evalRPN(tokens2));


tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// console.log(evalRPN(tokens3));

/*
["2","1","+","3","*"]
((2+1)*3) = 9

["4","13","5","/","+"]
((13/5)+4) = Int 6

["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
(((((9+3)*6)/10)*-11)+17)+5) = 22
((10*(6/((9+3)* -11)))+17)+5 
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/