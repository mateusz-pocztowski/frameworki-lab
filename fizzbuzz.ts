const numbers = 100;

const dividerLabelMap = {
  Fizz: 3,
  Buzz: 5,
  FizzBuzz: 15,
} as const;

const createNumbersArray = (): number[] => {
  return Array.from(Array(numbers).keys());
};

const labels = Object.keys(dividerLabelMap) as Array<keyof typeof dividerLabelMap>;

const result = labels.reduce<Array<string | number>>((current, label) => {
  const dividerArray = createNumbersArray().filter((number) => {
    return number > 0 && number % dividerLabelMap[label] === 0;
  });

  dividerArray.forEach((number) => {
    current[number] = label;
  });

  return current;
}, createNumbersArray());

console.log(result);
