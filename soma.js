const getArgValue = require("./util");

const soma = Number(getArgValue("x")) + Number(getArgValue("y"));

console.log(soma);