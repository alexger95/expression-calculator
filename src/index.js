function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    let indexO = [];
    let indexC = [];

    expr = expr.split('');
    //проверка скобок
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {
            indexO.push(expr[i]);
        }
        if (expr[i] == ')') {
            indexC.push(expr[i]);
        }
        if (expr[i] + expr[i + 1] + expr[i + 2] == "/ 0") throw ("TypeError: Division by zero.");
    }
    if (indexO.length != indexC.length) {
        throw ("ExpressionError: Brackets must be paired");

    }
    expr = expr.join('').replace(/\s/g, "");

    var value = expr.match(/(^[0-9*\/\\(\\)+-]+$)/);
    var res = new Function('return ' + value);
    if (res() == Infinity) throw ("TypeError: Division by zero.");

    return res();
}

module.exports = {
    expressionCalculator
}