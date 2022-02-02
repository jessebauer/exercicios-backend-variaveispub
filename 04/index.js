let montanteFinal, capital = 1000, tempo = 5, taxa = 0.125;

montanteFinal = capital * Math.pow(1 + taxa, tempo);

console.log(`O montante final será de R$ ${montanteFinal.toFixed(1)}`);
