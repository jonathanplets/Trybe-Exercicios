function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createDayNumber(){

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const elementoUl = document.querySelector('#days');

  for(let cont = 0; cont < dezDaysList.length ; cont ++) {
    const daysWeek = dezDaysList[cont];
    const elementoLi = document.createElement('li');
    elementoLi.className ="day";
    if(daysWeek == 24 || daysWeek == 25 || daysWeek == 31) {
        elementoLi.className += " holiday";
    }
    if(daysWeek == 4 || daysWeek == 11 ||daysWeek == 18 || daysWeek == 25) {
        elementoLi.className += " friday"
    }

    elementoLi.innerHTML = daysWeek;
    elementoUl.appendChild(elementoLi);

  }
}

createDayNumber();




function feriando(feriado) {
 
 let botao = document.createElement('button');
 botao.innerHTML = feriado
 botao.id = "btn-holiday";
 let div = document.querySelector(".buttons-container");
 div.appendChild(botao);

}

feriando("Feriado");



function sextando(sexta){

let sextou = document.createElement('button');
sextou.innerHTML = sexta
sextou.id ="btn-friday";
let div = document.querySelector(".buttons-container");
div.appendChild(sextou);

}

sextando("Sexta-feira")

//let elementoUl = document.querySelector('#days');
//let elementoLi = document.createElement('li');
//elementoLi.className = "day"
//elementoLi.innerHTML = "29"
//elementoUl.appendChild(elementoLi);

