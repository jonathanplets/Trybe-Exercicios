let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let maiorValor = 0

for(let cont = 0 ; cont < numbers.length ; cont ++){
  
    if( maiorValor < numbers[cont]){
        maiorValor = numbers[cont]
    
    }


}
console.log(maiorValor)