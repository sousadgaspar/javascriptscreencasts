// A tiny program language

function parseExpression (program) {

  program = skipSpace(program);
  let match, expression;

  if(match = /^"([^"]*)"/.exec(program)) {
    expression = {type: "value", value: match[1]};
  } else if (match = /^\d+\b/.exec(program)) {
    expression = {type: "value", value: Number(match[0])};
  } else if (match = /^[^\s(),#"]+/.exec(program)) {
    expression = {type: "word", name: match[0]};
  } else {
    throw new SyntaxeError("Unexpected syntax: " + program);
  }


  return parseApply(expression, program.slice(match[0].length));

}

function skipSpace (string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}

function skipSpace(string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}


function parseApply (expression, program) {
  
  program = skipSpace(program);
  
  if (program[0] != "(") {
    return {expression: expression, rest: program};
  }

  program = skipSpace(program.slice(1));
  expression = {type: "apply", operator: expression, args: []};
  
  while (program[0] != ")") {
    let arg = parseExpression(program);
    expression.args.push(arg.expression);
    program = skipSpace(arg.rest);

    if (program[0] == ",") {
      program = skipSpace(program.slice(1));
    } else if (program[0] != ")") {
      throw new SyntaxError("Expected ',' or ')'");
    }
  }

  return parseApply(expression, program.slice(1));
}


function parse (program) {
  let {expression, rest} = parseExpression(program);

  if (skipSpace(rest).length > 0) {
    throw new SyntaxError("Unexpexted text after program")
  }

  return expression;
}



const specialForms = Object.create(null);

const topScope = Object.create(null);
topScope.false = false;
topScope.true = true;

function evaluate (expression, scope) {
  if (expression.type == "value") {
    return expression.value;
  } else if (expression.type == "word") {
    if (expression.name in scope) {
      return scope[expression.namme];
    } else { 
      throw new ReferenceError(`Undefined binding ${expression.name}`);
    }
  } else if (expression.type == "apply") {
    let {operator, args} = expression;
    if (operator.type == "word" && operator.name in specialForms) {
      return specialForms[operator.name](expression.args, scope);
    } else {
      let operation = evaluate(operator, scope);
      if (typeof operation == "function") {
        return operation(...args.map(arg => evaluate(arg, scope)));
      } else {
        throw new TypeError("Applying a non-function.");
      }
    }
  }
}


function run (program) {
  return evaluate(parse(program), Object.create(topScope));
};


specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};


specialForms.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError("Wrong number of arguments to while.");
  }

  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }

  return false;
}



specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0] != "word") {
    throw new SyntaxError("Incorrect use of define");
  }

  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
}


for (let operator of ["+", "-", "*", "/", "==", "<", ">"]) {
  topScope[operator] = Function("a, b", `return a ${operator} b;`);
}


topScope.print = value => {
  console.log(value);
  return value;
}


specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("Functions needs a body");
  }

  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map(expression => {
    if (expression.type != "word") {
      throw new SyntaxError("Parameters name must be word.");
    }

    return expression.name;
  });

  return function () {
    if (arguments.length != params.length) {
      throw new TypeError("Wrong number of arguments.");
    }
    let localScope = Object.create(scope);
    for(let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }

    return evaluate(body, localScope);
  }
}


// run(`
//   do(define(total, 0),
//     define(count, 1),
//     while(<(count, 11),
//       do(define(total, +(total, count)),
//         define(count, +(count, 1)))),
//     print(total))
// `);


run(`
  do(define(plusOne, fun(a, +(a, 1))),
    print(plusOne(10)))
`);


// console.log(parse("+(a, 10)"));

// let prog = parse(`if(true, false, true)`);
// console.log(evaluate(prog, topScope));