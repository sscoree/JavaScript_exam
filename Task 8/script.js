/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2, op){
    this.num1 = num1;
    this.num2 = num2;
    this.op = op;
    this.calculate = function() {
      switch (op) {
        case 'sum':
          return this.num1 + this.num2;
        case 'subtraction':
          return this.num1 - this.num2;
        case 'multiplication':
          return this.num1 * this.num2;
        case 'division':
          return this.num1 / this.num2;
      }
    }
  };
  
  const sum = new Calculator(17, 59, 'sum');
  console.log(sum.calculate());