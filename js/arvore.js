function arvore() {
  const valorCompra = Number(document.getElementById('ivalorpadrao').value)
  const valorVenda = Number(document.getElementById('ivalormercado').value)
  const porcentagemPerda = Number(document.getElementById('iperda').value)
  const valorFilho1 = Number(document.getElementById('filho1').value)
  const valorFilho2 = Number(document.getElementById('filho2').value)
  const valorFilho3 = Number(document.getElementById('filho3').value)
  const valorFilho4 = Number(document.getElementById('filho4').value)
  const maximoSol = Number(document.getElementById('sol').value)
  const maximoChuva = Number(document.getElementById('chuva').value)
  let largura = window.innerWidth
  const arvoretree = document.getElementById('divtree')

  if(valorCompra==0 || valorVenda==0){
    return alert('Insira um valor de compra e venda do produto')
  } else if (valorCompra <0 || valorVenda < 0 || porcentagemPerda < 0 || valorFilho1 < 0 || valorFilho2 < 0 || valorFilho3 <0 || valorFilho4 <0){
    return alert('Insira um valor válido para os campos')
  }

  //Neto 1
  let custoNeto1 = valorCompra*valorFilho1
  let receitaNeto1 = (valorFilho1 > maximoSol)? valorVenda*maximoSol : ((1-(porcentagemPerda/100))*valorFilho1*valorVenda)
  let lucroNeto1 = receitaNeto1 - custoNeto1
  //Neto 2
  let custoNeto2 = valorCompra*valorFilho1
  let receitaNeto2 = (valorFilho1 > maximoChuva)? valorVenda*maximoChuva : ((1-(porcentagemPerda/100))*valorFilho1*valorVenda)
  let lucroNeto2 = receitaNeto2 - custoNeto2
  //Neto 3
  let custoNeto3 = valorCompra*valorFilho2
  let receitaNeto3 = (valorFilho2 > maximoSol)? valorVenda*maximoSol : ((1-(porcentagemPerda/100))*valorFilho2*valorVenda)
  let lucroNeto3 = receitaNeto3 - custoNeto3
  //Neto 4
  let custoNeto4 = valorCompra*valorFilho2
  let receitaNeto4 = (valorFilho2 > maximoChuva)? valorVenda*maximoChuva : ((1-(porcentagemPerda/100))*valorFilho2*valorVenda)
  let lucroNeto4 = receitaNeto4 - custoNeto4
  //Neto 5
  let custoNeto5 = valorCompra*valorFilho3
  let receitaNeto5 = (valorFilho3 > maximoSol)? valorVenda*maximoSol : ((1-(porcentagemPerda/100))*valorFilho3*valorVenda)
  let lucroNeto5 = receitaNeto5 - custoNeto5
  //Neto 6
  let custoNeto6 = valorCompra*valorFilho3
  let receitaNeto6 = (valorFilho3 > maximoChuva)? valorVenda*maximoChuva : ((1-(porcentagemPerda/100))*valorFilho3*valorVenda)
  let lucroNeto6 = receitaNeto6 - custoNeto6
  //Neto 7
  let custoNeto7 = valorCompra*valorFilho4
  let receitaNeto7 = (valorFilho4 > maximoSol)? valorVenda*maximoSol : ((1-(porcentagemPerda/100))*valorFilho4*valorVenda)
  let lucroNeto7 = receitaNeto7 - custoNeto7
  //Neto 8
  let custoNeto8 = valorCompra*valorFilho4
  let receitaNeto8 = (valorFilho4 > maximoChuva)? valorVenda*maximoChuva : ((1-(porcentagemPerda/100))*valorFilho4*valorVenda)
  let lucroNeto8 = receitaNeto8 - custoNeto8
   return arvoretree.innerHTML= `
   <div class="scrollable">
   <div class="content">   
   <div class="tree">
      <ul>
          <li>
              <a href="#">Pai</a>
              <ul>
                  <li>
                      <a href="#">Filho 1 ${valorFilho1}kg</a>
                      <ul>
                          <li>
                              <a href="#">Sol</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto1} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto1)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto1)} </a></li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Chuva</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto2} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto2)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto2)} </a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Filho 2 ${valorFilho2}kg</a>
                      <ul>
                          <li>
                              <a href="#">Sol</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto3} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto3)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto3)} </a></li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Chuva</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto4} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto4)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto4)} </a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Filho 3 ${valorFilho3}kg</a>
                      <ul>
                          <li>
                              <a href="#">Sol</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto5} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto5)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto5)} </a></li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Chuva</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto6} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto6)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto6)} </a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Filho 4 ${valorFilho4}kg</a>
                      <ul>
                          <li>
                              <a href="#">Sol</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto7} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto7)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto7)} </a></li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Chuva</a>
                              <ul>
                                  <li><a href="#">Custo: ${custoNeto8} </a></li>
                                  <li><a href="#">Receita: ${Math.round(receitaNeto8)} </a></li>
                                  <li><a href="#">Lucro: ${Math.round(lucroNeto8)} </a></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
    </div>
    </div>
    </div>
      `

}