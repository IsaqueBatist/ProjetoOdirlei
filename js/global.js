let Permutacao = true
let Combinacao = false
let Arranjo = false
let Arvore = false

function fatorial(num) {
  let resultado = 1
  for (let i = 1; i <= num; i++) {
    if (num == 0) {
      return 1
    }
    resultado *= i
  }
  return resultado
}

let permutacaov = document.getElementById('permutacao')
let combinacaov = document.getElementById('combinacao')
let arranjov = document.getElementById('arranjo')
let argumentosv = document.getElementById('argumentos')
let containerButton = document.getElementById('containerButton')
let arvorev = document.getElementById('arvore')

let permutacaod = document.getElementById('permutacaoDrop')
let combinacaod = document.getElementById('combinacaoDrop')
let arranjod = document.getElementById('arranjoDrop')
let argumentosd = document.getElementById('argumentosDrop')
let arvored = document.getElementById('arvoreDrop')

//Navbar
permutacaov.addEventListener("click", function(){
  if(Combinacao){
    Combinacao = false
    Permutacao = true
  } else if (Arranjo){
    Arranjo = false
    Permutacao = true
  } else if (Arvore){
    Arvore = false
    Permutacao = true
  }
  const body = document.getElementById('body')
  const arguments = document.getElementById('argumentos')
  containerButton.style.display = 'none'
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgba(119,24,30,1) 59%, rgba(169,39,39,1) 100%)'
  document.title = "Permutação"
  permutacaov.style.backgroundColor = `rgba(119,24,30,1)`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `#282832`
  argumentosv.style.backgroundColor = `#282832`
  arvorev.style.background = '#282832'
  return main.innerHTML = `${Permutacao ? `
<div>
  <div class="title">
    <h1>Permutação</h1>
  </div>
    <div class="text">
      <p>Tendo em mãos uma sequência ordenada qualquer com um número “n” de elementos distintos, qualquer outra sequência formada pelos mesmos “n” elementos reordenados é chamada de <strong>permutação</strong>.</p>
    </div>
  </div>
  <div class="input-group w-100 text-center">
    <div class="form-floating">
      <input type="text" class="form-control" id="value" placeholder="Username" autocomplete="off">
      <label for="value">Valor</label>
    </div>
</div>
<div class="button">
  <button class ="submit" onclick="calcular()" id="botao" >Calcular</button>
</div>
</div>
  <div>
    <div id="result">
    </div>
  </div>
  `: Combinacao? '' : Arranjo? '' : null}`
})
combinacaov.addEventListener("click", function(){
  if(Permutacao){
    Permutacao = false
    Combinacao = true
  } else if (Arranjo){
    Arranjo = false
    Combinacao = true
  } else if (Arvore){
    Arvore = false
    Combinacao = true
  }
  const body = document.getElementById('body')
  const arguments = document.getElementById('argumentos')
  containerButton.style.display = 'none'
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `rgb(24, 86, 120, 1)`
  arranjov.style.backgroundColor = `#282832`
  argumentosv.style.backgroundColor = `#282832`
  arvorev.style.background = '#282832'
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgb(24, 86, 120, 1) 59%, rgb(24, 93, 120, 1) 100%)'
  document.title = "Combinação"
  return main.innerHTML = `${Permutacao ? ``: Combinacao? `
  <div class="title">
    <h1>Combinação</h1>
  </div>
  <div class="text">
    <p><strong>Combinação</strong> é definida como as diferentes formas de seleção de um grupo, tendo alguns ou todos os itens de um conjunto, sem que a ordem importe.</p>
  </div>
  <div class="input-group mb-3">
  <div class="form-floating">
    <input type="number" class="form-control" id="n" placeholder="Username" autocomplete="off">
    <label for="n">n</label>
  </div>
  <div class="form-floating">
    <input type="number" class="form-control" id="k" placeholder="Username" autocomplete="off">
    <label for="k">k</label>
  </div>
</div>
<div class="button">
  <button onclick="calcularCombinacao()" class ="submit" id="botao" >Calcular</button>
</div>
<div id="result">
</div>
  ` : Arranjo? '' : null}`
})
arranjov.addEventListener("click", function(){
  if(Combinacao){
    Combinacao = false
    Arranjo = true
  } else if (Permutacao){
    Permutacao = false
    Arranjo = true
  } else if (Arvore){
    Arvore = false
    Arranjo = true
  }
  const body = document.getElementById('body')
  containerButton.style.display = 'block'
  document.title = "Arranjo"
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `#282832`
  argumentosv.style.backgroundColor = `#282832`
  arvorev.style.background = '#282832'
  arranjov.style.backgroundColor = `rgb(120, 117, 24)`
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgb(120, 117, 24) 59%, rgb(120, 130, 24, 1) 100%)'
  return main.innerHTML = `${Permutacao ? ``: Combinacao? '' : Arranjo? `
  <div class="title">
  <h1>Arranjo</h1>
  </div>
  <div class="text">
  <p><strong>Arranjo</strong> são os modos diferentes de organizar os objetos de um conjunto, em uma ordem específica. Isto implica toda a disposição ou rearranjo que for possível.</strong>.</p>
  </div>
  <div class="input-group mb-3">
  <div class="form-floating">
  <input type="number" class="form-control" id="n" placeholder="Username" autocomplete="off">
  <label for="n">n</label>
  </div>
  <div class="form-floating">
  <input type="number" class="form-control" id="k" placeholder="Username" autocomplete="off">
  <label for="k">k</label>
  </div>
  </div>
  <div class="button">
  <button class ="submit" onclick="calcularArranjo()" id="botao" >Calcular</button>
  </div>
  <div id="result">
  </div>
  ` : null}`
})
argumentosv.addEventListener("click", function(){
  console.log('entrou')
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `#282832`
  arvorev.style.background = '#282832'
  argumentosv.style.backgroundColor = `rgb(120, 117, 24)`
  arranjov.style.backgroundColor = `#282832`
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgb(120, 117, 24) 59%, rgb(120, 130, 24, 1) 100%)'
  return main.innerHTML = `
  <div class="title">
    <h1>Arranjo Condicional</h1>
  </div>
  <div class="input">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="number" class="form-control" id="numberofElements" placeholder="Username" autocomplete="off" onchange="inputs()">
            <label for="numberofElements">Número de elementos</label>
          </div>
        </div>
      </div>
      <div class="input">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="arrayElements" placeholder="Username" autocomplete="off" onchange="getArray()">
            <label for="arrayElements">Array de elementos</label>
          </div>
        </div>
      </div>

      <div class="elements" id="elements">
        <!--Inputs-->
      </div>
      <div class="button">
        <button onclick="arranjoRestricao()" id="arguments" >Calcular</button>
      </div>
      <div class="result" class ="submit" id="result">
  
    </div>
  </div>
  `
})
arvorev.addEventListener('click', function(){
  if(Combinacao){
    Combinacao = false
    Arvore = true
  } else if (Permutacao){
    Permutacao = false
    Arvore = true
  } else if (Arranjo){
    Arranjo = false
    Arvore = true
  }
  containerButton.style.display = 'none'
  arvorev.style.backgroundColor = `rgb(0,0,0)`
  body.style.background = 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(191,132,201,1) 38%, rgba(241,167,255,1) 100%)'
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `#282832`
  arvorev.style.background = '#E6BAEE'
  argumentosv.style.backgroundColor = `#282832`



  return main.innerHTML = `${Permutacao ? ``: Combinacao? '' : Arranjo? `` : Arvore? `
  <div class="title">
        <h1>Árvore de Decisão</h1>
        </div>
        <div class="conteudo">
              <div class="inputs">
                  <div class="container">
                    <div class="input-group mb-3">
                      <div class="form-floating">
                      <input type="number" class="form-control" id="ivalorpadrao" placeholder="Valor De Compra" autocomplete="off">
                      <label for="ivalorpadrao">Valor De Compra</label>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="input-group mb-3">
                      <div class="form-floating">
                      <input type="number" class="form-control" id="ivalormercado" placeholder="Valor Mercado" autocomplete="off">
                      <label for="ivalormercado">Valor Mercado</label>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="input-group mb-3">
                      <div class="form-floating">
                        <input type="number" class="form-control" id="iperda" name="iperda" placeholder="Perda %" autocomplete="off">
                        <label for="iperda">Perda %</label>
                      </div>
                    </div>
                  </div>
                  <div class="filho">
                    <div>
                      <button class="tree" id="filho" type="button" onclick="drpdown()">Filho</button>
                      <div class="inputFilhos" id="filhoinput">
                        <ul>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="filho1" name="filho1" placeholder="Filho #1" autocomplete="off">
                              <label for="filho1">Filho #1</label>
                            </div>
                          </div>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="filho2" name="filho2" placeholder="Filho #2" autocomplete="off">
                              <label for="filho2">Filho #2</label>
                            </div>
                          </div>
                          <li>
                            <div class="input-group mb-3">
                              <div class="form-floating">
                                <input type="number" class="form-control" id="filho3" name="filho3" placeholder="Filho #3" autocomplete="off">
                                <label for="filho3">Filho #3</label>
                              </div>
                            </div>
                          <li>
                            <div class="input-group mb-3">
                              <div class="form-floating">
                                <input type="number" class="form-control" id="filho4" name="filho4" placeholder="Filho #4" autocomplete="off">
                                <label for="filho4">Filho #4</label>
                              </div>
                            </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--Condições-->
                  <div class="condicoes">
                    <div>
                      <button class="tree" id="filho" type="button" onclick="drpdownCondicoes()">Condições</button>
                      <div class="inputFilhos" id="condicoes">
                        <ul>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="sol" name="filho1" placeholder="Filho #1" autocomplete="off">
                              <label for="filho1">Sol</label>
                            </div>
                          </div>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="chuva" name="filho2" placeholder="Filho #2" autocomplete="off">
                              <label for="filho2">Chuva</label>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button class="tree" type="button" onclick="arvore()">Enviar</button>
              </div>
              <div id="divtree">
            
              </div>
          </div>
  ` : null}`
})

//Dropdown menu
permutacaod.addEventListener("click", function(){
  if(Combinacao){
    Combinacao = false
    Permutacao = true
  } else if (Arranjo){
    Arranjo = false
    Permutacao = true
  } else if(Arvore){
    Arvore = false
    Permutacao = true
  }
  const body = document.getElementById('body')
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgba(119,24,30,1) 59%, rgba(169,39,39,1) 100%)'
  document.title = "Permutação"
  permutacaov.style.backgroundColor = `rgba(119,24,30,1)`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `#282832`
  return main.innerHTML = `${Permutacao ? `
<div>
  <div class="title">
    <h1>Permutação</h1>
  </div>
    <div class="text">
      <p>Tendo em mãos uma sequência ordenada qualquer com um número “n” de elementos distintos, qualquer outra sequência formada pelos mesmos “n” elementos reordenados é chamada de <strong>permutação</strong>.</p>
    </div>
  </div>
  <div class="input-group w-100 text-center">
    <div class="form-floating">
      <input type="number" class="form-control" id="value" placeholder="Username" autocomplete="off">
      <label for="value">Valor</label>
    </div>
</div>
<div class="button">
  <button onclick="calcular()" id="botao" class ="submit" >Calcular</button>
</div>
</div>
  <div>
    <div id="result">
    </div>
  </div>
  `: Combinacao? '' : Arranjo? '' : null}`
})
combinacaod.addEventListener("click", function(){
  if(Permutacao){
    Permutacao = false
    Combinacao = true
  } else if (Arranjo){
    Arranjo = false
    Combinacao = true
  }else if(Arvore){
    Arvore = false
    Combinacao = true
  }
  const body = document.getElementById('body')
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `rgb(24, 86, 120, 1)`
  arranjov.style.backgroundColor = `#282832`  
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgb(24, 86, 120, 1) 59%, rgb(24, 93, 120, 1) 100%)'
  document.title = "Combinação"
  return main.innerHTML = `${Permutacao ? ``: Combinacao? `
  <div class="title">
    <h1>Combinação</h1>
  </div>
  <div class="text">
    <p><strong>Combinação</strong> é definida como as diferentes formas de seleção de um grupo, tendo alguns ou todos os itens de um conjunto, sem que a ordem importe.</p>
  </div>
  <div class="input-group mb-3">
  <div class="form-floating">
    <input type="number" class="form-control" id="n" placeholder="Username" autocomplete="off">
    <label for="n">n</label>
  </div>
  <div class="form-floating">
    <input type="number" class="form-control" id="k" placeholder="Username" autocomplete="off">
    <label for="k">k</label>
  </div>
</div>
<div class="button">
  <button class="btn-calc" onclick="calcularCombinacao()" id="botao" >Calcular</button>
</div>
<div id="result">
</div>
  ` : Arranjo? '' : null}`
})
arranjod.addEventListener("click", function(){
  if(Combinacao){
    Combinacao = false
    Arranjo = true
  } else if (Permutacao){
    Permutacao = false
    Arranjo = true
  }else if(Arvore){
    Arvore = false
    Arranjo = true
  }
  const body = document.getElementById('body')
  document.title = "Arranjo"
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `rgb(120, 117, 24)`
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgb(120, 117, 24) 59%, rgb(120, 130, 24, 1) 100%)'
  return main.innerHTML = `${Permutacao ? ``: Combinacao? '' : Arranjo? `
<div class="title">
  <h1>Arranjo</h1>
</div>
<div class="text">
    <p><strong>Arranjo</strong> são os modos diferentes de organizar os objetos de um conjunto, em uma ordem específica. Isto implica toda a disposição ou rearranjo que for possível.</strong>.</p>
</div>
<div class="input-group mb-3">
  <div class="form-floating">
    <input type="number" class="form-control" id="n" placeholder="Username" autocomplete="off">
    <label for="n">n</label>
  </div>
  <div class="form-floating">
    <input type="number" class="form-control" id="k" placeholder="Username" autocomplete="off">
    <label for="k">k</label>
  </div>
</div>
<div class="button">
  <button onclick="calcularArranjo()" id="botao" >Calcular</button>
</div>
<div id="result">
</div>
  ` : null}`
})
argumentosd.addEventListener("click", function(){
  const body = document.getElementById('body')
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `#282832`
  argumentosv.style.backgroundColor = `rgb(120, 117, 24)`
  body.style.background = 'linear-gradient(27deg, rgba(2,0,36,1) 12%, rgb(120, 117, 24) 59%, rgb(120, 130, 24, 1) 100%)'
  main.innerHTML = `
  <div class="title">
    <h1>Arranjo Condicional</h1>
  </div>
  <div class="input">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="number" class="form-control" id="numberofElements" placeholder="Username" autocomplete="off" onchange="inputs()">
            <label for="numberofElements">Número de elementos</label>
          </div>
        </div>
      </div>
      <div class="input">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="arrayElements" placeholder="Username" autocomplete="off" onchange="getArray()">
            <label for="arrayElements">Array de elementos</label>
          </div>
        </div>
      </div>
      <div class="elements" id="elements">
        <!--Inputs-->
      </div>
      <div class="button">
        <button onclick="arranjoRestricao()" id="arguments" >Calcular</button>
      </div>
      <div class="result" id="result">
    </div>
  `
})
arvored.addEventListener("click", function(){
  if(Combinacao){
    Combinacao = false
    Arvore = true
  } else if (Permutacao){
    Permutacao = false
    Arvore = true
  } else if (Arranjo){
    Arranjo = false
    Arvore = true
  }
  document.title = "Árvore de decisão"
  arvorev.style.backgroundColor = `rgb(0,0,0)`
  body.style.background = 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(191,132,201,1) 38%, rgba(241,167,255,1) 100%)'
  permutacaov.style.backgroundColor = `#282832`
  combinacaov.style.backgroundColor = `#282832`
  arranjov.style.backgroundColor = `#282832`
  arvorev.style.background = '#E6BAEE'
  argumentosv.style.backgroundColor = `#282832`



  return main.innerHTML = `${Permutacao ? ``: Combinacao? '' : Arranjo? `` : Arvore? `
  <div class="title">
        <h1>Árvore de Decisão</h1>
        </div>
        <div class="conteudo">
              <div class="inputs">
                  <div class="container">
                    <div class="input-group mb-3">
                      <div class="form-floating">
                      <input type="number" class="form-control" id="ivalorpadrao" placeholder="Valor De Compra" autocomplete="off">
                      <label for="ivalorpadrao">Valor De Compra</label>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="input-group mb-3">
                      <div class="form-floating">
                      <input type="number" class="form-control" id="ivalormercado" placeholder="Valor Mercado" autocomplete="off">
                      <label for="ivalormercado">Valor Mercado</label>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="input-group mb-3">
                      <div class="form-floating">
                        <input type="number" class="form-control" id="iperda" name="iperda" placeholder="Perda %" autocomplete="off">
                        <label for="iperda">Perda %</label>
                      </div>
                    </div>
                  </div>
                  <div class="filho">
                    <div>
                      <button class="tree" id="filho" type="button" onclick="drpdown()">Filho</button>
                      <div class="inputFilhos" id="filhoinput">
                        <ul>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="filho1" name="filho1" placeholder="Filho #1" autocomplete="off">
                              <label for="filho1">Filho #1</label>
                            </div>
                          </div>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="filho2" name="filho2" placeholder="Filho #2" autocomplete="off">
                              <label for="filho2">Filho #2</label>
                            </div>
                          </div>
                          <li>
                            <div class="input-group mb-3">
                              <div class="form-floating">
                                <input type="number" class="form-control" id="filho3" name="filho3" placeholder="Filho #3" autocomplete="off">
                                <label for="filho3">Filho #3</label>
                              </div>
                            </div>
                          <li>
                            <div class="input-group mb-3">
                              <div class="form-floating">
                                <input type="number" class="form-control" id="filho4" name="filho4" placeholder="Filho #4" autocomplete="off">
                                <label for="filho4">Filho #4</label>
                              </div>
                            </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--Condições-->
                  <div class="condicoes">
                    <div>
                      <button class="tree" id="filho" type="button" onclick="drpdownCondicoes()">Condições</button>
                      <div class="inputFilhos" id="condicoes">
                        <ul>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="sol" name="filho1" placeholder="Filho #1" autocomplete="off">
                              <label for="filho1">Sol</label>
                            </div>
                          </div>
                          <li>
                          <div class="input-group mb-3">
                            <div class="form-floating">
                              <input type="number" class="form-control" id="chuva" name="filho2" placeholder="Filho #2" autocomplete="off">
                              <label for="filho2">Chuva</label>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button class="tree" type="button" onclick="arvore()">Enviar</button>
              </div>
              <div id="divtree">
            
              </div>
          </div>
  ` : null}`
})

const main = document.getElementById('main')
main.innerHTML = `${Permutacao ? `
  <div>
  <div class="title">
    <h1>Permutação</h1>
  </div>
    <div class="text">
      <p>Tendo em mãos uma sequência ordenada qualquer com um número “n” de elementos distintos, qualquer outra sequência formada pelos mesmos “n” elementos reordenados é chamada de permutação.</p>
    </div>
  <div class="input-group w-100 text-center">
    <div class="form-floating">
      <input type="text" class="form-control" id="value" placeholder="Username" autocomplete="off">
      <label for="value" >Valor</label>
    </div>
  </div>
  <div class="button">
    <button onclick="calcular()" id="botao" >Calcular</button>
  </div>
  </div>
  <div>
  <div id="result">
  </div>
  </div>
`: Combinacao? `
<div class="title">
<h1>Combinação</h1>
</div>
<div class="text">
<p>Tendo em mãos uma sequência ordenada qualquer com um número “n” de elementos distintos, qualquer outra sequência formada pelos mesmos “n” elementos reordenados é chamada de permutação.</p>
</div>
<div class="input-group mb-3">
<div class="form-floating">
<input type="number" class="form-control" id="n" placeholder="Username" autocomplete="off">
<label for="n">n</label>
</div>
<div class="form-floating">
<input type="number" class="form-control" id="k" placeholder="Username" autocomplete="off">
<label for="k">k</label>
</div>
</div>
<div class="button">
<button onclick="calcularCombinacao()" id="botao" >Calcular</button>
</div>
<div id="result">
</div>
` : Arranjo? `
<div class="title">
<h1>Arranjo</h1>
</div>
<div class="text">
  <p>Tendo em mãos uma sequência ordenada qualquer com um número “n” de elementos distintos, qualquer outra sequência formada pelos mesmos “n” elementos reordenados é chamada de permutação.</p>
</div>
<div class="input-group mb-3">
<div class="form-floating">
  <input type="number" class="form-control" id="n" placeholder="Username" autocomplete="off">
  <label for="n">n</label>
</div>
<div class="form-floating">
  <input type="number" class="form-control" id="k" placeholder="Username" autocomplete="off">
  <label for="k">k</label>
</div>
</div>
<div class="button">
  <button onclick="calcularArranjo()" id="botao" >Calcular</button>
</div>
<div id="result">
</div>
` : null}`
