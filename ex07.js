let aluno = {
    nome: "Lulu",
    cpf: "123.123.123-12",
    cidade: "João Pessoa",
    notas: [10.0,9.8,3.5,9.9]
};

var media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/(aluno.notas).length

var random = [Math.floor(Math.random()*(aluno.notas).length)]

var convertida = random * 10

console.log(`Aluno: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}\nNotas: ${aluno.notas}\nMedia: ${media}\nNota aleatória: ${random}\nNota convertida: ${convertida}`);