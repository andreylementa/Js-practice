const getAverage = (x, y, z) => {
  return (x + y + z) / 3;
};

const dept1AverSales1 = getAverage(35467, 29842, 38501);
const dept2AverSales1 = getAverage(70533, 50121, 33899);

const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);

const printBonus = function (dept1AverSales, dept2AverSales) {
  if (dept1AverSales > dept2AverSales) {
    const dif = dept1AverSales - dept2AverSales;
    const percent = (dif / dept2AverSales) * 100;
    if (percent >= 30) {
      console.log(`dept 1 will get a bonus of ${percent}%`);
    } else {
      console.log("No bonus in this quarter");
    }
  } else if (dept2AverSales > dept1AverSales) {
    const dif = dept2AverSales - dept1AverSales;
    const percent = (dif / dept1AverSales) * 100;
    if (percent >= 30) {
      console.log(`dept 2 will get a bonus of ${percent}%`);
    } else {
      console.log("No bonus in this quarter");
    }
  } else {
    console.log("No bonus in this quarter");
  }
};

printBonus(dept1AverSales1, dept2AverSales1);
printBonus(dept1AverSales2, dept2AverSales2);
