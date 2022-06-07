function validaLogin(usuario, senha){
    //alert(`Você digitou ${usuario} ${senha}`) 
    if (!usuario) {
        alert('É obrigatório informar o usuário');
        return false
    }
    if (!senha) {
        alert('É obrigatório informar o senha');
        return false
    }
    if (usuario==="nome@gmail.com" && senha==="123456"){
        //carregando uma nova página
        window.location.href = "http://127.0.0.1:5500/menu.html"
        alert('Bem vindos!')
    }else {
        console.error("Erro de autentiicação")
        alert('Os dados de autenticidade são inválidos!')
    }
}