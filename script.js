function verificar() {

    var nome = document.getElementById('txtn').value
    var email = document.getElementById('txte').value
    var nomeCom = document.getElementById('txtf').value
    var qtd = parseInt(document.getElementById('txtq').value)
    var res = document.getElementById('res')
  
    var nomeCli = []

    var emailCli = []

    var nomeFood = []

    var qtdP = []

    var valor = 0
  
  
      if(nome.length == 0 || email.length == 0 || nomeCom.length == 0 || qtd.length == 0) {
        res.innerHTML = `Erro tente novamente`
      } else {
        nomeCli.push(nome)
        emailCli.push(email)
        nomeFood.push(nomeCom)
        qtdP.push(qtd)
      } if(nomeFood == 'Big Mac') {
        valor = 24.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Duplo Burguer Bacon') {
        valor = 18.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Big Meat') {
        valor = 30.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'San Burgue') {
        valor = 22.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Trofeu') {
        valor = 43.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Combo E Bacon') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Combo Com Cebola') {
        valor = 72.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Combo Com Fritas') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'King Combo') {
        valor = 93.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
      }
  }