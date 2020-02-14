const { generate } = require("react-dts-generator");
const path = require("path");

const result = generate({
  input: path.join(__dirname, '..', 'src', 'PaginationComponent.js')
});

console.log(result);