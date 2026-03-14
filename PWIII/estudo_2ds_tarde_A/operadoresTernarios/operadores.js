
  var num1 = 8;
  var num2 = 4;
  var num3 = "5";
  var num4 = 5;

  console.log(num1 == num2); // igual
  console.log("num1 é diferente de num2? " + (num1 != num2)); // True
  console.log("num1 é maior que num2? " + (num1 > num2)); // True
  console.log("num1 é menor que num2? " + (num1 < num2)); // False

  console.log("num1 + num2 = " + (num1 + num2)); // 12
  console.log("num1 - num2 = " + (num1 - num2)); // 4
  console.log("num1 * num2 = " + (num1 * num2)); // 32
  console.log("num1 / num2 = " + (num1 / num2)); // 2
  console.log("resto de num1 / num2 = " + (num1 % num2)); // 0
  console.log("num1 elevado a num2 = " + (num1 ** num2));
  console.log("raiz quadrada de num2 = " + (num2 ** (1/2))); // 2
  console.log("raiz cúbica de num1 = " + (num1 ** (1/3))); // 2**3

  console.log(num3 + num4); // 55
  console.log("num3 == num4: " + (num3 == num4)); // True
  console.log("num3 === num4: " + (num3 === num4)); // False
  console.log("num3 != num4: " + (num3 != num4)); // True
  console.log("num3 é maior ou igual a num4? " + (num3 >= num4)); // True
  console.log("num3 é menor ou igual a num4? " + (num3 <= num4)); // True

  console.log("++num3: " + (++num3)); // 5
  console.log("--num4: " + (--num4)); // 6

  num1 += num2;
  console.log("num1 += num2: " + num1); // 12

  num1 -= num4;
  console.log("Valor atual de num4: " + num4); // 3
  console.log("num1 -= num4: " + num1); // 3

  num3 = "5"; 

  console.log("num3 += num2: " + (num3 += num2)); // 54
  console.log("num1 é maior que num2 E num4? " + (num1 > num2 && num1 > num4)); // True
  console.log("num4 é maior ou igual a num1 OU num2? " + (num4 >= num1 || num4 >= num2)); // False