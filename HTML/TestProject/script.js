function enviarFormulario(){
    var nome_registrado = "Vinícius";
    var senha_registrada = "1234";
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if (nome == nome_registrado && senha == senha_registrada){
        alert("Parabéns!")
    }
    document.getElementById('form').reset();
}