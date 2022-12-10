function printMe(string) {
  console.log('I get called from print.js!');
  return string;
}

module.exports = { printMe };
