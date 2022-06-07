function calculaVendas(){
    let qtde = document.getElementById('quantidade').value
    let preco = document.getElementById('preco').value
    let total = (qtde * preco)
    document.getElementById('valorTotal').value = total
}