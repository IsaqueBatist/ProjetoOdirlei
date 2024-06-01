console.log('dentro')
function calcular() {
  const valor = document.getElementById('value').value
  const resultado = document.getElementById('result')
  const string = valor.toLowerCase();
  const contador = resultado.getElementsByTagName('p')
  let anagramas = 0;

  if (valor == '') {
    return window.alert('Insira um valor')
  } else if(valor <0){
    return window.alert('Insira um valor maior que 0')
  }

  // Se o valor for um número, retorna seu fatorial
  if (!isNaN(Number(string))) {
    if (contador.length >= 5) {
      const input = document.getElementById('value').value = ''
      return resultado.innerHTML = `<p>O fatorial de ${valor} é ${fatorial(Number(string))}</p>`

    } else {
      var newHistory = `<p>O fatorial de ${valor} é ${fatorial(Number(string))}</p>`
      var history = document.getElementById('result')
      const input = document.getElementById('value').value = ''
      return history.innerHTML = newHistory + history.innerHTML

    }

  } else { // Se o valor for uma string
    const frequencia = {}; //Declara o array frequencia

    // Conta a frequência de cada caractere na string
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      frequencia[char] = (frequencia[char] || 0) + 1;
    }

    //Calcular o denominador
    let denominador = 1;
    for (let char in frequencia) {
      denominador *= fatorial(frequencia[char]);
    }

    // O total de anagramas é o fatorial do tamanho da string dividido pelo denominador
    anagramas = fatorial(string.length) / denominador;
  }

  if (contador.length >= 5) {
    const input = document.getElementById('value').value = ''
    return resultado.innerHTML = `<p>${valor} tem ${anagramas} anagramas</p>`
  } else {
    const input = document.getElementById('value').value = ''
    var newHistory = `<p>${valor} tem ${anagramas} anagramas</p>`
    var history = document.getElementById('result')
    return history.innerHTML = newHistory + history.innerHTML
  }
}