function calcularCombinacao() {
  const k = parseInt(document.getElementById("k").value)
  const n = parseInt(document.getElementById("n").value)
  const resultado = document.getElementById('result')
  const contador = resultado.getElementsByTagName('p')
  if (k > n || isNaN(k) || isNaN(n) || n<0 || k<0 || !Number.isInteger(n) || !Number.isInteger(k)) {
    return window.alert('ERRO')
  } else if (contador.length >= 5) {
    resultado.innerHTML = ``
    const a = n - k
    let c = fatorial(n) / (fatorial(k) * fatorial(a))
    return resultado.innerHTML = `<p>O resultado da Combinação de ${n} para ${k} é: ${c}</p>`
  } else {
    const a = n - k
    let c = fatorial(n) / (fatorial(k) * fatorial(a))
    var newHistory = `<p>O resultado da Combinação de ${n} para ${k} é: ${c}</p>`
    var history = document.getElementById('result')
    return history.innerHTML = newHistory + history.innerHTML
  }

}