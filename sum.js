const calculateSum = (a, b) => {
  let sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
};

// export default calculateSum;

module.exports = calculateSum; // For CommonJS compatibility
