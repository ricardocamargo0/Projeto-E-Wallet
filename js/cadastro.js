console.log('JavaScript Carregado');


var senha = document.getElementById('senha');
var repeteSenha = document.getElementById('repeteSenha');
console.log(senha);
console.log(repeteSenha);

function validatePassword() {
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    console.log(senha);
    console.log(repeteSenha);
    
    if (repeteSenha != senha){
        return false
        document.getElementById('success').style.display = 'block';
    } else {
        return true
        document.getElementById('error').style.display = 'block';
    }

}