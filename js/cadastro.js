console.log('JavaScript Carregado');

function validatePassword() {
    // Pegar os valores dos inputs (bug original: comparava elementos DOM, não os valores)
    var senha = document.getElementById('senha').value;
    var repeteSenha = document.getElementById('repeteSenha').value;

    // Esconder alertas anteriores
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    // Validar se as senhas foram preenchidas
    if (senha === '' || repeteSenha === '') {
        document.getElementById('error').innerHTML = '<strong>Ops!</strong> Preencha os campos de senha.';
        document.getElementById('error').style.display = 'block';
        return false;
    }

    // Bug original: lógica invertida + return antes do display
    if (senha !== repeteSenha) {
        document.getElementById('error').innerHTML = '<strong>Ops!</strong> As senhas são diferentes.';
        document.getElementById('error').style.display = 'block';
        return false;
    } else {
        document.getElementById('success').innerHTML = '<strong>Oba!</strong> Conta criada com sucesso!';
        document.getElementById('success').style.display = 'block';
        return true;
    }
}