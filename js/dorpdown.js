const inputfilho = document.getElementsByClassName('inputFilhos')
const condicoes = document.getElementsByClassName('condicoes')

let filhoaberto = false
let condicoesaberto = false

function drpdown() {
    if(filhoaberto){
    inputfilho[0].style.display= 'none'
    filhoaberto = false
  } else {
    inputfilho[0].style.display= 'block'
    filhoaberto = true
  }
  }
function drpdownCondicoes() {
    if(condicoesaberto){
    inputfilho[1].style.display= 'none'
    condicoesaberto = false
  } else {
    inputfilho[1].style.display= 'block'
    condicoesaberto = true
  }
  }


