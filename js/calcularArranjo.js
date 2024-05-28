function calcularArranjo(){
  const n = parseInt(document.getElementById('n').value)
  const k = parseInt(document.getElementById('k').value)
  const resultado = document.getElementById('result')
  const contador = resultado.getElementsByTagName('p')
  
  if(isNaN(n) ||isNaN(k) || n<k || n<0 || k<0 || !Number.isInteger(n) || !Number.isInteger(k)){

    return window.alert('Erro!!')

  } else if (contador.length>=5){
    
      resultado.innerHTML = ''
      let a = n-k
      let arranjo = fatorial(n)/fatorial(a)
      return resultado.innerHTML = `<p>O resultado da Combinação de ${n} para ${k} é: ${arranjo}</p>`
    
  } else {
      let a = n-k
      let arranjo = fatorial(n)/fatorial(a)
      var newHistory = `<p>O resultado da Combinação de ${n} para ${k} é: ${arranjo}</p>`
      var history = document.getElementById('result')
      return history.innerHTML = newHistory + history.innerHTML
  }
}

function inputs(){
  const numberofElements = document.getElementById('numberofElements').value
  const elements = document.getElementById('elements')
  if(numberofElements <0){
    return alert('Digite um valor maior que 0')
  } else {
    elements.innerHTML = ''
    for(let i=0; i<numberofElements; i++){
        elements.innerHTML += `
        <input type="text" class="elemets-repeat" name = "name" onChange="takeValue()" autocomplete="off" >
        `
    }
  }
}

function takeValue() {
  const values = document.getElementsByName('name')
  const arrayValues = []
  for(let i=0; i<values.length;i++){
    arrayValues.push(values[i].value)  
  }
    return arrayValues
}

function getArray(){
  const numbers = document.getElementById('arrayElements').value
  const array = numbers.split(" ")
  return array
}

let k = 0
let n = 0

function arranjoRestricao(){
  const divResultado = document.getElementById('result')
  const contador = divResultado.getElementsByTagName('div')
  const arrayElements = getArray();
  const arrayInputs = takeValue();

  n   = arrayElements.length
  
  if(arrayElements.length < arrayInputs.length){
    return alert('O tamanho do array tem que ser maior que o número de elementos')
  }else if(arrayElements.length == 1 || arrayInputs.length == 0){
    return alert('É necessário valores para prosseguir')
  }

  for(let i = 0;i<arrayInputs.length;i++){
      if(arrayElements.includes(arrayInputs[i]) || arrayInputs[i] == ''){
        continue;
      } else {
        return alert('O valor da restrição precisa estar contida nos elementos')
      }
    }
  for(let i =0; i<arrayInputs.length; i++){
    if(arrayInputs[i] == ''){
      k+=1
    } else {
      n-=1
    }
  }

  let resultado = fatorial(n)/fatorial(n-k)
  let string = ''
  for(let i = 0; i<arrayInputs.length;i++){
    if(arrayInputs[i] == ''){
      string += ' '
    } else {
      string += `${arrayInputs[i]}, `
    }
  }
  if(contador.length >= 2){
    divResultado.innerHTML = `
    <div>
      Elementos: ${arrayElements} <br/>
      Restrições: ${string} <br/>
      Combinações possíveis respeitando as restrições: ${resultado} <br/>
    </div>
    `
  } else {
    divResultado.innerHTML += `
    <div>
      Elementos: ${arrayElements} <br/>
      Restrições: ${string} <br/>
      Combinações possíveis respeitando as restrições: ${resultado} <br/>
      </div>
    `
  }
}