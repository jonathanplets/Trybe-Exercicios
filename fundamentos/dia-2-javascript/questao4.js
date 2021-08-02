let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0
   for(let cont = 0 ; cont < numbers.length ; cont ++){
      resultado = resultado + numbers[cont]
    }
    console.log((resultado) / (numbers.length))
   let final = ((resultado) / (numbers.length))
    if( final > 20){
        console.log("valor maior que 20");
    }else{
        console.log("valor menor ou igual a 20");
    }