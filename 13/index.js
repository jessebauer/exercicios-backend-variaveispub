let areaTotal, areaBase, areaLateral, raio, altura;

raio = 2;

altura = 2;

areaBase = 2 * Math.PI * Math.pow(raio, 2)

areaLateral = 2 * Math.PI * raio * altura;

areaTotal = 2 * areaBase + areaLateral;

console.log(`A área total das faces do cilindro de raio igual a ${raio} e altura igual a ${altura} é de ${areaTotal.toFixed(2)}`);



