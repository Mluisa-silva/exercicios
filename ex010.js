const numeros = Array.from({length: 101}, (_,index)=> index +1)


for (let numero in numeros){
    if (numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz")
    }else if(numero % 3 == 0){
        console.log("Fizz")
    }else if(numero % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(numero)
    }
}