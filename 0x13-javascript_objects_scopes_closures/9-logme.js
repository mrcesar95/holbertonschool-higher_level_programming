#!usr/bin/node
// function hat prints the number of arguments already printed and the new argument value
let counter = 0;
exports.logMe = function (item) {
  return console.log(`${counter++}: ${item}`);
};
