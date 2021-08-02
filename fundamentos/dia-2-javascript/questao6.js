let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let totalimpares = 0

for(cont = 0 ;cont < numbers.length ; cont ++){

    if( numbers[cont] % 2 !== 0 ){

    totalimpares = 1 + totalimpares

    }
    
}
console.log(totalimpares)


