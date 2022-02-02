let pessoasinfectadas, tempo, transmissibilidade, infectadosInicial;
tempo = 100;
infectadosInicial = 1000;
transmissibilidade = 4;

pessoasinfectadas = infectadosInicial * Math.pow(transmissibilidade, (tempo / 7));

console.log(`${pessoasinfectadas} de pessoas infectadas`);