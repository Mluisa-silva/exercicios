var notas = [10.0,9.2,3.4,5.4];

for (i = 0; i < 4; i++){
    console.log(`Nota ${[i+1]}: ${notas[i]}`);
}

var media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length
console.log(`Media: ${media}`)

if (media >= 7){
    console.log("Aprovado!!");
}else{
    console.log("Reprovado.")
}