let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = 1000

for( let cont = 0 ; cont < numbers.length ; cont ++){
    
    if( menorValor > numbers[cont]){
        menorValor = numbers[cont]
    
    }

}
console.log (menorValor)