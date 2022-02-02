let C, i, M, n;

M = 90000;

C = 60000;

n = 24;

i = (Math.pow((M / C), (1 / n)) - 1) * 100;

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i.toFixed(2)}%, pois após ${n} meses você teve que pagar ${M} reais`);
